const requestsController = require("../Controllers/post_requests.js")
const router = require("express").Router();

module.exports = (request, response) => {
  router.post('/', function (request, response) {
      requestsController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};