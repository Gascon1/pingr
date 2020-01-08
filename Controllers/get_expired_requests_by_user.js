const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `Select requests.id,categories.name as category,services.name as service, statuses.name as status, requests.created_at, requests.start_time, requests.end_time, users.first_name, users.last_name FROM requests join statuses ON requests.status_id = statuses.id join categories ON requests.category_id = categories.id join services ON requests.service_id = services.id join users ON requests.user_id = users.id where requests.user_id = 2 and start_time < current_date;`

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