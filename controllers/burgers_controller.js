// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function (req, res) {
  burger.select(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    //redirect to /
    res.redirect("/");
  });
});
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log(req.body.devoured);
  console.log("condition: ", condition);
  if (!req.body.devoured) {
    burger.update({
      devoured: true
    }, condition, function (result) {
      if (result.changedRows == 0) {
        console.log("If is happening");
        // If no rows were changed, then the ID must not exist, so 404
        res.status(200);
      } else {
        res.status(200);
      }
    });
  } else {
    burger.update({
      devoured: false
    }, condition, function (result) {
      if (result.changedRows == 0) {
        console.log("If is happening");
        // If no rows were changed, then the ID must not exist, so 404
        res.status(200);
      } else {
        res.status(200);
      }
    });
  }
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;