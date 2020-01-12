const db = require("./db.js");

module.exports = (req, res) => {
  if (req.query.view === "updateContext") {
    let parsedUser = JSON.parse(req.query.user);
    query = `SELECT users.id AS user_id, users.first_name, users.business_id AS business_id, users.email AS email, businesses.category_id AS 								 category_id  
						 FROM users 
						 FULL OUTER JOIN businesses ON businesses.id = users.business_id
						 WHERE users.id = ${Number(parsedUser.user_id)}
						 `;
  } else {
    query = `Select * FROM users ORDER BY id;`;
  }
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
