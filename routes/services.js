const servicesController = require("../Controllers/services")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      servicesController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};