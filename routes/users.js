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
    .spread(function(user, created) {
      if (created) {
        return res.json({
          user: user
        });
      } else {
        return res.json({
          message: "user already exists"
        });
      }
    });
});

router.put("/:id", function(req, res, next) {
  console.log(req.params.id);
  db.user
    .findOne({
      where: {
        id: req.params.id
      }
    })
    // )
    .then(function(user) {
      user
        .update({
          firstName: req.body.firstName || db.user.firstName,
          lastName: req.body.lastName || db.user.lastName,
          age: req.body.age || db.user.age,
          email: req.body.email || db.user.email
        })
        .then(function(user) {
          res.json({
            user: user
          });
        });
    });
});

module.exports = router;
