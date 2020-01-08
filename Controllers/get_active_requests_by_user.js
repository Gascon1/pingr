const db = require('./db.js')

module.exports = (req, res) => {

	let query = `SELECT requests.id AS request_id, requests.max_price AS request_max_price, businesses.name AS business_name, businesses.address AS business_address, businesses.phone AS business_phone_number, categories.name AS category, services.name AS service, services.transaction_price AS transaction_price, services.duration AS duration, statuses.name AS status, requests.appointment_start_time, requests.appointment_end_time, requests.start_time AS availability_start_time, requests.end_time AS availability_end_time FROM requests 
	JOIN businesses ON requests.business_id = businesses.id
	JOIN categories ON requests.category_id = categories.id
	JOIN services ON requests.service_id = services.id
	JOIN statuses ON requests.status_id = statuses.id;
	`

	db.query(query, (err, result) => {
		if (err) {
            res.send(err)
            console.log("error", err)
		} else {
            console.log("result", result)
			res.send(result.rows)
		}
    })
    
}