const db = require('./db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {



	//1.check if email exists in db
	db.query(`SELECT id,first_name, email, password, business_id from users where email = '${req.body.email}'`, (err, result) => {
		console.log("result.rows", result)

		if (result.rows.length === 0) {
			res.send({
				error_message:'Invalid Credentials'
			})			
		} else {		
			bcrypt.compare(req.body.password,result.rows[0].password, (err, match) => {

				user = {
					first_name: result.rows[0].first_name,
					email: result.rows[0].email,
					user_id:result.rows[0].id,
					business_id:result.rows[0].business_id
				}
				if (match===true) {
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


