const db = require("./db.js");

module.exports = (req, res) => {
  console.log("THIS IS REQ.BODY", req.body);
  console.log("THIS IS REQ.QUERY", req.query);
  console.log("THIS IS REQ.PARAMS", req.params);
  let query = `
		INSERT INTO services (name, business_id, category_id, description, transaction_price, duration)
		VALUES ('${req.body.serviceName}', ${req.body.businessID}, ${req.body.categoryID}, '${req.body.serviceDescription}', ${req.body.servicePrice}, ${req.body.serviceDuration})
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
