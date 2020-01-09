const db = require('./db.js')


module.exports = (req, res) => {
	console.log("in POST REQUESTS req body",req.body)

	let query = {
		text:`INSERT INTO requests (user_id, category_id, start_time, end_time, max_price, service_name)
		VALUES ($1, $2, $3, $4, $5, $6);`,
		values: [req.body.user, Number(req.body.categoryID), req.body.requestStartTime, req.body.requestEndTime,  Number(req.body.maxPrice), req.body.service]
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