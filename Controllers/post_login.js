const db = require('./db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {

	//1.check if email exists in db
	db.query(`SELECT first_name, last_name, email, password from users where email = '${req.body.email}'`, (err, result) => {
		if (err) {
			res.send('Sorry, email not found')
		} else {			
			bcrypt.compare(req.body.password,result.rows[0].password, (err, match) => {
				user = {
					first_name: result.rows[0].first_name,
					last_name: result.rows[0].last_name,
					email: result.rows[0].email
				}
				if (match) {
					let token = jwt.sign(user, process.env.SECRET)
					res.status(200).json({
						message: 'You are logged in',
						token: token
					})
				}else{
					res.send('Sorry, invalid password')
				}

			})

		}
	})

}

