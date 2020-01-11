const db = require("./db.js");

module.exports = (req, res) => {
  console.log("in PUT REQUESTS req body", req.body);
  console.log("in PUT REQUESTS req params", req.params);
  console.log("in PUT REQUESTS req query", req.query);

  const query = {
    text: `UPDATE requests SET business_id = $1, service_id = $2, appointment_start_time = $3 WHERE id = $4 RETURNING *`,
    values: [
      req.body.businessID,
      req.body.serviceID,
      req.body.appointmentStartTime2,
      req.body.requestID
    ]
  };

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log("error", err);
    } else {
      // console.log("result", result);
      res.send(result.rows);
    }
  });
};
