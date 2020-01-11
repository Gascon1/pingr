const db = require("./db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  let query = {
    text: `
		INSERT INTO businesses (name, email, phone, address, category_id)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id;`,
    values: [
      req.body.business_name,
      req.body.business_email,
      req.body.business_phone,
      req.body.business_address,
      req.body.categoryID
    ]
  };
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log("error", err);
    } else {
      console.log("result", result);
      res.send(result.rows);
    }
  });
};
