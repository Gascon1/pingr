const db = require('./db.js')

module.exports = (req, res) => {

	if (req.body.active === true) {
		let query = `Select requests.id,categories.name as category,services.name as service, statuses.name as status, requests.created_at, requests.start_time, requests.end_time, users.first_name, users.last_name FROM requests join statuses ON requests.status_id = statuses.id join categories ON requests.category_id = categories.id join services ON requests.service_id = services.id join users ON requests.user_id = users.id where requests.user_id = 1 and start_time > current_date;`
	}else if (req.body.active === false ) {
		query = `Select requests.id,categories.name as category,services.name as service, statuses.name as status, requests.created_at, requests.start_time, requests.end_time, users.first_name, users.last_name FROM requests join statuses ON requests.status_id = statuses.id join categories ON requests.category_id = categories.id join services ON requests.service_id = services.id join users ON requests.user_id = users.id where requests.user_id = 1 and start_time < current_date;`
	}else{
		console.log("success")
		query = `Select requests.id,categories.name as category,services.name as service, statuses.name as status, requests.created_at, requests.start_time, requests.end_time, users.first_name, users.last_name FROM requests join statuses ON requests.status_id = statuses.id join categories ON requests.category_id = categories.id join services ON requests.service_id = services.id join users ON requests.user_id = users.id;`
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