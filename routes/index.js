var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



// Config

//const express = require('express')
const path = require('path')
const app = express()


require('dotenv').config()

// API

// Static Files


// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/properties.html'))
	console.log('__dirname', __dirname)
})


// Run Server

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})