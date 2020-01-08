const requestsController = require("../Controllers/get_login.js")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      console.log("req.body", req.body)
      console.log("wgwgwgwgwgw")
      requestsController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};