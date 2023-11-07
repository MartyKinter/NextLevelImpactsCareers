const express = require("express");
const { careers } = require("./careerList")

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
    return res.render("NextLevelCareers.html", { careers });
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelDiagnostics.html");
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics/genetics", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelGenetics.html");
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics/autoimmune", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelAutoimmune.html");
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics/bioinformatics", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelBioInformatics.html");
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics/oncology", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelOncology.html");
  } catch (err) {
    return err;
  }
});

router.get("/diagnostics/women", async function (req, res, next) {
  try {
    return res.render("./Diagnostics/nextLevelWomen.html");
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
