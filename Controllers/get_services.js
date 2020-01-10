const db = require("./db.js");

module.exports = (req, res) => {
  console.log("THIS REQ QUERY", req.query.categoryID);

  let query = {
    text: `SELECT DISTINCT services.name FROM services
	WHERE services.category_id=$1;`,
    values: [req.query.categoryID]
  };

  // let query = {
  //   text: `SELECT DISTINCT services.id  services.name FROM services
  // WHERE services.category_id=$1;`,
  //   values: [req.query.categoryID]
  // };

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
