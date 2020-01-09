const db = require('./db.js')

module.exports = (req, res) => {

	if (req.body.active === true) {
		query = `SELECT requests.id AS request_id, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.availability_start_time AS availability_start_time, requests.availability_end_time AS availability_end_time FROM requests 
		JOIN businesses ON requests.business_id = businesses.id
		JOIN categories ON requests.category_id = categories.id
		JOIN services ON requests.service_id = services.id
		JOIN statuses ON requests.status_id = statuses.id
		WHERE requests.status_id IN (1,2) AND requests.appointment_end_time > current_date and requests.user_id=2;
		`
	}else if (req.body.active === false ) {
		query = `SELECT requests.id AS request_id, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.availability_start_time AS availability_start_time, requests.availability_end_time AS availability_end_time FROM requests 
		JOIN businesses ON requests.business_id = businesses.id
		JOIN categories ON requests.category_id = categories.id
		JOIN services ON requests.service_id = services.id
		JOIN statuses ON requests.status_id = statuses.id
		WHERE requests.appointment_end_time < current_date and requests.user_id=2;
		`
	}else{
		console.log("success")
		query = `SELECT requests.id AS request_id, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.availability_start_time AS availability_start_time, requests.availability_end_time AS availability_end_time FROM requests 
		JOIN businesses ON requests.business_id = businesses.id
		JOIN categories ON requests.category_id = categories.id
		JOIN services ON requests.service_id = services.id
		JOIN statuses ON requests.status_id = statuses.id
		WHERE requests.user_id=2;
		`
	}
		
	db.query(query, (err, result) => {
		console.log("query", query)
		if (err) {
			res.send(err)
			console.log("error", err)
		} else {
			console.log("result", result)
			res.send(result.rows)
		}
})
  
}