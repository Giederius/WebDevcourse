const express = require("express");

const app = express();

// homepage is represented as /
// created more routes below
app.get("/", function (req, res) {
  res.send("<h1>hello</h1>");
  console.log(req);
});

app.get("/contact", function (req, res) {
  res.send("contact me at giedriusmecius@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Something about me: Well, it's me mario");
});

app.get("/hobbies", function (req, res) {
  res.send("Photography, food");
});

//listens on a specific port of html
app.listen(3000, function () {
  console.log("server started on port 3000");
});
