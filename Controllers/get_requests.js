const db = require("./db.js");

module.exports = (req, res) => {
  if (req.query.view === "active") {
    query = `SELECT requests.id AS request_id, requests.request_service_name AS request_service_name, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.availability_start_time AS availability_start_time, requests.availability_end_time AS availability_end_time 
    FROM requests 
		JOIN businesses ON requests.business_id = businesses.id
		JOIN categories ON requests.category_id = categories.id
		FULL OUTER JOIN services ON requests.service_id = services.id
		JOIN statuses ON requests.status_id = statuses.id
		WHERE requests.status_id IN (1,2) AND requests.availability_end_time > current_date and requests.user_id=${req.query.user_id};
		`;
  } else if (req.query.view === "history") {
    query = `SELECT requests.id AS request_id, requests.request_service_name AS request_service_name, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.availability_start_time AS availability_start_time, requests.availability_end_time AS availability_end_time 
    FROM requests 
		JOIN businesses ON requests.business_id = businesses.id
		JOIN categories ON requests.category_id = categories.id
		FULL OUTER JOIN services ON requests.service_id = services.id
		JOIN statuses ON requests.status_id = statuses.id
		WHERE requests.avalability_end_time < current_date and requests.user_id=${req.query.user_id};
		`;
  } else if (req.query.view === "businessRequests") {
    query = {
      text: `SELECT requests.id AS request_id, request_service_name AS service_name, availability_start_time, availability_end_time, max_price, first_name as user_name, categories.name AS category_name, status_id AS status_id, requests.business_id, requests.service_id, requests.appointment_start_time,
      requests.max_price AS request_max_price
    FROM requests
    JOIN categories ON categories.id = category_id
    JOIN users ON users.id = user_id
    FULL OUTER JOIN services ON services.id = service_id
    WHERE status_id = 1 AND requests.category_id = $1;`,
      values: [req.query.categoryID]
    }
  } else {
    query = `SELECT *
    FROM requests
    ORDER BY requests.id;`;
  }

  db.query(query, (err, result) => {
    console.log("query", query);
    if (err) {
      res.send(err);
      console.log("error", err);
    } else {
      res.send(result.rows);
      console.log("rows", result.rows)
    }
  });
};
