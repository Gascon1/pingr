const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();


const db = require("./db");


function read(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        file,
        {
          encoding: "utf-8"
        },
        (error, data) => {
          if (error) return reject(error);
          resolve(data);
        }
      );
    });
  }



  module.exports = function application(
    ENV,
    actions = { updateAppointment: () => {} }
  ) {
    app.use(cors());
    app.use(helmet());
    app.use(bodyparser.json());
  
    // app.use("/api", days(db));
    // app.use("/api", appointments(db, actions.updateAppointment));
    // app.use("/api", interviewers(db));
  
    if (ENV === "development" || ENV === "test") {
      Promise.all([
        //Tables
        read(path.resolve(__dirname, `db/schema/01_users.sql`)),
        read(path.resolve(__dirname, `db/schema/02_business.sql`)),
        read(path.resolve(__dirname, `db/schema/03_business_categories.sql`)),
        read(path.resolve(__dirname, `db/schema/04_requests.sql`)),
        read(path.resolve(__dirname, `db/schema/05_statuses.sql`)),
        read(path.resolve(__dirname, `db/schema/06_services.sql`)),
        //Seeds
        read(path.resolve(__dirname, `db/seeds/01_users.sql`)),
        read(path.resolve(__dirname, `db/seeds/02_business.sql`)),
        read(path.resolve(__dirname, `db/seeds/03_business_categories.sql`)),
        read(path.resolve(__dirname, `db/seeds/04_requests.sql`)),
        read(path.resolve(__dirname, `db/seeds/05_statuses.sql`)),
        read(path.resolve(__dirname, `db/seeds/06_services.sql`)),

      ])
        .then(([create, seed]) => {
          app.get("/api/debug/reset", (request, response) => {
            db.query(create)
              .then(() => db.query(seed))
              .then(() => {
                console.log("Database Reset");
                response.status(200).send("Database Reset");
              });
          });
        })
        .catch(error => {
          console.log(`Error setting up the reset route: ${error}`);
        });
    }
  
    app.close = function() {
      return db.end();
    };
  
    return app;
  };