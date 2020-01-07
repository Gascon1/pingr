const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `SELECT * FROM requests;`

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