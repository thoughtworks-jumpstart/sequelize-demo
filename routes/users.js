const router = require("express").Router();
const passport = require("passport");
const auth = require("./auth");
const db = require("../models");

router.get("/", auth.required, function(req, res, next) {
  res.json("GET /user");
});

router.post("/", function(req, res, next) {
  db.user
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email
    })
    .then(function(data) {
      return res.json({
        message: "User created",
        data: data
      });
    });
});

module.exports = router;
