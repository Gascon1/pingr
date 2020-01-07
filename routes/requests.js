const requestsController = require("../Controllers/requests")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      requestsController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};