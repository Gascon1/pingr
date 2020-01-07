const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `SELECT * FROM categories;`

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}