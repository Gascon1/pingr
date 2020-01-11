const db = require('./db.js')

module.exports = (req, res) => {
	console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS", req.body)
	console.log("BUSINESS ID", req.body.business_id)
	console.log("USERS ID", req.body.user_id)


	let query = {
		text:`UPDATE users SET business_id = $1 WHERE id = $2;`,
		values: [req.body.businessID, req.body.user_id]
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