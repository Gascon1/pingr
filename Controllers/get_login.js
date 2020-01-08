const db = require('./db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {

	//1.check if email exists in db
	db.query(`SELECT email, password from users where email = '${req.body.email}'`, (err, result) => {
		if (err) {
			res.send('Sorry, email not found')
		} else {			
			bcrypt.compare(req.body.password,result.rows[0].password, (err, match) => {

				if (match) {
					let token = jwt.sign({user:result.rows[0].email}, process.env.SECRET)
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

