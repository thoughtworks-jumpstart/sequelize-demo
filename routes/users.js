const router = require("express").Router();
const passport = require("passport");
const auth = require("./auth");
const db = require("../models");

router.get("/", function(req, res, next) {
  db.user.findAll().then(function(users) {
    res.json(users);
  });
});

router.post("/", function(req, res, next) {
  db.user
    .findOrCreate({
      where: { email: req.body.email },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
      }
    })
    .then(function(data) {
      return res.json({
        user: data
      });
    });
});

module.exports = router;
