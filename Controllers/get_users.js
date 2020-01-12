const db = require('./db.js')

module.exports = (req, res) => {

	if (req.query.view === "updateContext") {
		let parsedUser = JSON.parse(req.query.user)
		query = `SELECT business_id 
						 FROM users 
						 WHERE users.id = ${Number(parsedUser.user_id)}
						 
						 `

	}
	else {
		query = `Select * FROM users ORDER BY id;`
	}
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