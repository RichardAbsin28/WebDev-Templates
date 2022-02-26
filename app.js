//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {

});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
