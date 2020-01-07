const statusesController = require("../Controllers/statuses")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      statusesController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};