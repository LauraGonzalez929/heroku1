var express = require("express");
var app = express();

var port = 3000;

app.get("/", function (req, res) {});

app.get("/", function (req, res) {
  res.send("Hello Word");
});

app.listen(3000, function () {
  console.log("server is live on port:");
});