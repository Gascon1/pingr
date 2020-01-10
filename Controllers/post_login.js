const db = require('./db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {

	//1.check if email exists in db
	db.query(`SELECT first_name, last_name, email, password from users where email = '${req.body.email}'`, (err, result) => {

		if (result.rows.length === 0) {
			res.send({
				error_message:'Invalid Credentials'
			})			
		} else {		
			bcrypt.compare(req.body.password,result.rows[0].password, (err, match) => {
				console.log("match", match);
				console.log("req.body", req.body.password, result.rows[0].password)
				user = {
					first_name: result.rows[0].first_name,
					last_name: result.rows[0].last_name,
					email: result.rows[0].email
				}
				if (match===true) {
					console.log("match is succesful");
					let token = jwt.sign(user, process.env.SECRET)
					res.status(200).json({
						message: 'You are logged in',
						token: token
					})
				}else{
					res.send({error_message:'Invalid Credentials'})
				}

			})

		}
	})

}

