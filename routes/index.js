const router = require("express").Router();
const userRouter = require("./users");

router.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

router.use("/users", userRouter);

module.exports = router;
