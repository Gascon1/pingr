const db = require('./db.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = (req, res) => {

	let sanitize = function (value) {
		if (value === ""){
			return null
		} else {
			return value
		}
		
	}
	let query = {
		text:`INSERT INTO users (first_name, last_name, phone, email, password)
	VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
	values: [sanitize(req.body.first_name) , sanitize(req.body.last_name), sanitize(req.body.phone), sanitize(req.body.email), sanitize(bcrypt.hashSync(req.body.password, 10))]
}
	console.log("req.body", req.body.first_name);
	db.query(query, (err, result) => {
		if (err) {
            res.send({
				error_message: 'Invalid Credentials'
			})	
		} else {
			user = {
				first_name: req.body.first_name,
				email: req.body.email,
				user_id:result.rows[0].id,
				business_id: null
			}
			let token = jwt.sign(user, process.env.SECRET)
			res.status(200).json({
				message:'successfully registered and signed in',
				token: token
			})
		

		}
    })
}


