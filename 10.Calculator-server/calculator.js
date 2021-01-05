const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //naudojamas visada kad gaut prieeiga prie body

app.get("/", function (req, res) {
  //   res.send("Calculator"); sends just the line to send a whole file use this
  //   to get file directory use __dirname
  res.sendFile(__dirname + "/index.html");
});
//  deal with post from index.html
app.post("/", function (req, res) {
  var num1 = Number(req.body.numb1);
  var num2 = Number(req.body.numb2);

  var result = num1 + num2;
  res.send("Your result is " + result);
});

//listens on a specific port of html
app.listen(3000, function () {
  console.log("server started on port 3000");
});
