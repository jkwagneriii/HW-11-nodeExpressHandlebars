// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM
let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        console.log('CREATE BURGER')
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
};

// Export the database functions for the controller 
module.exports = burger;