const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const bodyParser = require("body-parser");
const { NotFoundError } = require("./expressError");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure("templates", {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(express.static("public"));
app.use(routes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  res.status(status);

  return res.render("error.html", { err });
});

module.exports = app;