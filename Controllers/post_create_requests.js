const db = require('./db.js')

module.exports = (req, res) => {
	console.log("hiiii")
	 console.log('req.query', req.query)
	let query = `INSERT INTO requests (user_id, category_id, service_id, status_id, created_at, start_time, end_time, is_prepaid)
    VALUES (2,3,4,1, current_date, '2020-01-10 18:00:00', '2020-01-10 19:00:00', false);`

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