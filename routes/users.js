const router = require("express").Router();
const passport = require("passport");
const auth = require("./auth");
const db = require("../models");

router.get("/", (req, res, next) => {
  db.user.findAll().then(users => {
    res.json({ users: users });
  });
});

router.post("/", (req, res, next) => {
  db.user
    .findOrCreate({
      where: { email: req.body.email },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
      }
    })
    .spread((user, created) => {
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

router.put("/:id", (req, res, next) => {
  db.user
    .findOne({
      where: {
        id: req.params.id
      }
    })
    // )
    .then(user => {
      user
        .update({
          firstName: req.body.firstName || db.user.firstName,
          lastName: req.body.lastName || db.user.lastName,
          age: req.body.age || db.user.age,
          email: req.body.email || db.user.email
        })
        .then(user => {
          res.json({
            user: user
          });
        });
    });
});

router.delete("/:id", (req, res, next) => {
  db.user
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(user => {
      return res.json({ message: "User deleted" });
    });
});

module.exports = router;
