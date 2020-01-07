const businessesController = require("../Controllers/businesses")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      businessesController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};