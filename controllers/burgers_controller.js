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
// Adding route for grabbing new burgers created
router.post("/api/addnew", function(req, res) {

    console.log("ADDING ROUTE", req.body)
    burger.create(['burger_name', "devoured"],[req.body.name, false],function(data) {
      // Makes page auto refresh once we are done
      //.send has a built in END 
      res.send('ADDED')
    });
});
// Adding route for grabbing info about wether devoured is true or false
router.put("/api/devoured/:burgerId", function(req, res) {

    console.log("DEVOUR ROUTE", req.params)
    burger.update({devoured: true}," id = " + req.params.burgerId,function(data) {
    //.send has a built in END 
    res.send('DEVOURED')
    });
});

// Export routes for server.js to use.
module.exports = router;