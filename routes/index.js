const express = require("express");
const router = express.Router();
const { checkAuthCookie } = require("../services/auth.js");

// GET /
router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/protected", checkAuthCookie, function(req, res, next) {

  console.log("USER", req.user);

  res.send("done");
});

module.exports = router;
