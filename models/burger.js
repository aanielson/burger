// Inside burger.js, import orm.js into burger.js
//Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions
//     using burger specific input for the ORM.
var burger = {
    select: function(callBack) {
        orm.select("burgers", function(res) {
            callBack(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, callBack) {
        orm.create("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },
    update: function(condition, callBack) {
        orm.update("burgers", {devoured : true}, condition, function(res) {
            callBack(res);
        });
    },
    delete: function(condition, callBack) {
        orm.delete("burgers", condition, function(res) {
            callBack(res);
        });
    }
};
// Export at the end of the burger.js file.
module.exports = burger;
