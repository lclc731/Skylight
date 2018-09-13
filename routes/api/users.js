const express = require("express");
const router = express.Router();

// load user model
const User = require("../../models/User");

// @route GET api/posts/test
// @desc  Tests post route
// @access  Public
router.get("/test", (req, res) => res.send("test"));

// @route POST api/posts/register
// @desc  Register a user, if username exists return 400, else
//        create a user saved to DB
// @access  Public

// TODO task 1, task 2, task 3
router.post("/register", (req, res) => {
  User.findOne({
    username: req.body.username
  }).then(user => {
    if (user) {
      return res.status(400).json({
        username: "username already exists"
      });
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
