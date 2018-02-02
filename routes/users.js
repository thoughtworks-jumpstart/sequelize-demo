var router = require("express").Router();
var passport = require("passport");
var auth = require("./auth");

router.get("/", auth.required, function(req, res, next) {
  res.json("GET /user");
});

module.exports = router;
