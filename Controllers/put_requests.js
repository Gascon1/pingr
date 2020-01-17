const db = require("./db.js");
const accountSid = process.env.TWILIO_ACCOUNT;
const authToken = process.env.TWILIO_CREDENTIALS;
const client = require("twilio")(accountSid, authToken);

module.exports = (req, res) => {
  console.log("in PUT REQUESTS req body", req.body);
  console.log("in PUT REQUESTS req params", req.params);
  console.log("in PUT REQUESTS req query", req.query);

  let userNotification = false;

  if (req.body.action === "cancel") {
    query2 = {
      text: `UPDATE requests SET status_id = 5 WHERE id = $1`,
      values: [req.body.request_id]
    };
  } else {
    userNotification = true;
    query2 = {
      text: `UPDATE requests SET status_id = 2,business_id = $1, service_id = $2, appointment_start_time = $3 WHERE id = $4 RETURNING *`,
      values: [
        req.body.businessID,
        req.body.serviceID,
        req.body.appointmentStartTime2,
        req.body.requestID
      ]
    };
  }

  console.log("query", query2);

  db.query(query2, (err, result) => {
    if (err) {
      res.send(err);
      console.log("error!!!", err);
    } else {
      if (userNotification) {
        // client.messages
        //   .create({
        //     body: `Update from Pingr:  Your ${req.body.serviceID} has been confirmed for a start time of ${req.body.appointmentStartTime2}`,
        //     from: "+19108530024",
        //     to: "+15146328762"
        //   })
        //   .then(message => console.log(message.sid));
        // console.log("result", result);
      }
      res.send(result.rows);
    }
  });
};
