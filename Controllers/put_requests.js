const db = require("./db.js");
const accountSid = "AC68f2ae1e8f10fb83bb051d3e21507867";
const authToken = "aaa05eeb1de3ca87ec1dcaa894899ddde";
const client = require("twilio")(accountSid, authToken);

module.exports = (req, res) => {
  console.log("in PUT REQUESTS req body", req.body);
  console.log("in PUT REQUESTS req params", req.params);
  console.log("in PUT REQUESTS req query", req.query);

  const query = {
    text: `UPDATE requests SET status_id = 2,business_id = $1, service_id = $2, appointment_start_time = $3 WHERE id = $4 RETURNING *`,
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
      console.log("i am in else");
      client.messages
        .create({
          body: `Update from Pingr:  Your ${req.body.serviceID} has been confirmed for a start time of ${req.body.appointmentStartTime2}`,
          from: "+12052776115",
          to: "+13065307801"
        })
        .then(message => console.log(message.sid));
      // console.log("result", result);
      res.send(result.rows);
    }
  });
};
