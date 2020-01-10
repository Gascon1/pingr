const db = require('./db.js')

module.exports = (req, res) => {

	let query = `Select * FROM users ORDER BY id;`

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