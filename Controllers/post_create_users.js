const db = require('./db.js')

module.exports = (req, res) => {
	 console.log('req.query', req.query)
	let query = `INSERT INTO users (first_name, last_name, phone, email, password)
    VALUES ('Lucas', 'Spicemaster','5141994567', 'lucas@gmail.com', '12345');`
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
    