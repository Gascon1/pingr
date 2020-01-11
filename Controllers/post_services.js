const db = require('./db.js')


module.exports = (req, res) => {
	let query = {
		text:`
		INSERT INTO businesses (name, business_id, category_id, description, transaction_price)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id;`,
	values: [req.body.name, req.body.business_id, req.body.category_id, req.body.description, req.body.transaction_price]
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



