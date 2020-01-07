// require package
const {Pool} = require('pg')

// create connection
 const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

// connect to database
pool.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

module.exports = pool