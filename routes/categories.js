const categoriesController = require("../Controllers/categories")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      categoriesController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};