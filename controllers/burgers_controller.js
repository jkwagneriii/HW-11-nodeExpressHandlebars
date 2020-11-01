var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {

// });

// Adding route for getting burgers from db
router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
          burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
      });
  
  });

// Export routes for server.js to use.
module.exports = router;