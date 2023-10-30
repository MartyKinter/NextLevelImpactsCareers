const express = require("express");

const router = new express.Router();

router.get("/", async function (req, res, next) {
  try {
    return res.render("NextLevelImpacts.html");
  } catch (err) {
    return err;
  }
});

router.get("/careers", async function (req, res, next) {
  try {
    return res.render("NextLevelCareers.html");
  } catch (err) {
    return err;
  }
});

router.get("/team", async function (req, res, next) {
  try {
    return res.render("NextLevelTeam.html");
  } catch (err) {
    return err;
  }
});

router.get("/about", async function (req, res, next) {
  try {
    return res.render("NextLevelAbout.html");
  } catch (err) {
    return err;
  }
});

module.exports = router;
