function dateFormatter(appointmentDateTime, requestDate, requestTime) {
  const apptDateTimeOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC"
  };
  const formattedApptDateTime = new Date(appointmentDateTime).toLocaleString(
    "en-GB",
    apptDateTimeOptions
  );

  const reqDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    dateStyle: "medium",
    timeZone: "UTC"
  };
  const formattedReqDate = new Date(requestDate).toLocaleString(
    "en-GB",
    reqDateOptions
  );

  const reqTimeOptions = { timeStyle: "short", timeZone: "UTC" };
  const formattedReqTime = new Date(requestTime).toLocaleString(
    "en-GB",
    reqTimeOptions
  );

  if (appointmentDateTime) {
    return formattedApptDateTime;
  }

  if (requestDate) {
    return formattedReqDate;
  }

  if (requestTime) {
    return formattedReqTime;
  }
}

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

  db.query(query2, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (userNotification) {
        client.messages
          .create({
            body: `Update from Pingr:  Your ${
              result.rows[0].request_service_name
            } has been confirmed on ${dateFormatter(
              req.body.appointmentStartTime2
            )}`,
            from: "+19108530024",
            to: "+15146328762"
          })
          .then(message => console.log(message.sid));
      }
      res.send(result.rows);
    }
  });
};
