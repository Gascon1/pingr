const db = require("./db.js");

module.exports = (req, res) => {
  if (req.query.view === "searchForm") {
    query = {
      text: `SELECT DISTINCT services.name FROM services
	WHERE services.category_id=$1;`,
      values: [req.query.categoryID]
    };
  } else if (req.query.view === "businessService") {
    (query = `SELECT services.id AS service_id, services.name AS service_name, services.business_id, services.category_id, services.transaction_price, services.duration AS service_duration 
			FROM services 
			JOIN businesses ON businesses.id = services.business_id 
			WHERE services.business_id = ${req.query.businessID}
			AND services.transaction_price < ${req.query.maxPrice}
			AND services.name = '${req.query.serviceName.toLowerCase()}'
			ORDER BY services.transaction_price DESC
			LIMIT 1;`),
      console.log("THIS IS THE QUERY", query);
  } else {
    query = `SELECT * FROM services;`
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
