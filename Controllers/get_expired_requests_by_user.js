const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `SELECT requests.id,categories.name AS category,services.name AS service, statuses.name AS status, requests.created_at, requests.start_time, requests.end_time, users.first_name, users.last_name 
	FROM requests 
	JOIN statuses ON requests.status_id = statuses.id 
	JOIN categories ON requests.category_id = categories.id 
	JOIN services ON requests.service_id = services.id 
	JOIN users ON requests.user_id = users.id 
	WHERE requests.user_id = 2 AND start_time < current_date;`

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