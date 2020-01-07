// require package
const {Client} = require('pg')

// create connection
const db = new Client({
	connectionString:process.env.DATABASE_URL
})

// connect to database
db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

module.exports = db