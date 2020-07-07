// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// reate the router for the app, and export the router at the end of your file.
//=======================method for getting all burgers=======================
router.get("/", function (req, res) {
  burger.select(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//=======================method for creating a new burger=======================
router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    //redirect to /
    res.redirect("/");
  });
});

//=======================method for updating an existing burger=======================
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  var devouredStatus = req.body.devoured;
  console.log(devouredStatus);
  console.log("condition: ", condition);
  if (!devouredStatus) {
    burger.update({
      devoured: true
    }, condition, function (result) {
      //redirect to /
      res.redirect("/");
    });
  } else {
    burger.update({
      devoured: false
    }, condition, function (result) {
        //redirect to /
        res.redirect("/");
    });
  }
});

//=======================method for deleting a burger=======================
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});

// Export routes for server.js to use.
module.exports = router;