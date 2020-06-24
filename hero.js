var express = require("express");
var app = express();

var port = process.env.port || 3000;

app.get("/", function (req, res) {
  res.send("Hello Word");
});

app.listen(port, function () {
  console.log("server is live on port:");
});
