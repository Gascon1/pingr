const db = require('./db.js')

module.exports = (req, res) => {

	console.log(req.body)
	
	let query = {
		text:`INSERT INTO users (first_name, last_name, phone, email, password)
	VALUES ($1, $2, $3, $4, $5);`,
	values: [req.body.first_name, req.body.last_name, req.body.phone, req.body.email, req.body.password]
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
    