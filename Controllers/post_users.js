const db = require('./db.js')
const bcrypt = require('bcrypt');


module.exports = (req, res) => {

	let query = {
		text:`INSERT INTO users (first_name, last_name, phone, email, password)
	VALUES ($1, $2, $3, $4, $5);`,
	values: [req.body.first_name, req.body.last_name, req.body.phone, req.body.email, bcrypt.hashSync(req.body.password, 10)]
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
    