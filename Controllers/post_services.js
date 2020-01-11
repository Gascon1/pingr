const db = require("./db.js");

module.exports = (req, res) => {
  console.log(req.body);
  let query = `
		INSERT INTO services (name, business_id, category_id, description, transaction_price, duration)
		VALUES ('${req.body.serviceName}', ${1}, ${2}, '${
    req.body.serviceDescription
  }', ${req.body.servicePrice}, ${req.body.serviceDuration})
		RETURNING id;`;

  db.query(query, (err, result) => {
    console.log(query);
    if (err) {
      res.send(err);
      console.log("error", err);
    } else {
      console.log("result", result);
      res.send(result.rows);
    }
  });
};
