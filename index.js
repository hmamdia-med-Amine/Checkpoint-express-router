const express = require("express");
const app = express();
const path = require("path");
const router = require("./routing");
const workingDays = require("./customMiddleware");

// I'm so confused how to insert the middleware between the req and the res so it can do the check on the date
// I found a lot of ideas but honestly i give up
// I'm moving on in order not to lose time hoping i will get it soon

//app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  var date = new Date();
  if (
    date.getDay > 0 &&
    date.getDay < 6 &&
    date.getHours() > 9 &&
    date.getHours < 17
  ) {
    next();
  } else {
    res.redirect("/offlinepage");
  }
});

app.get("/ContactUs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "Public", "ContactUs.html"));
});

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "Home.html"));
});

app.get("/OurServices", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "OurServices.html"));
});

// app.use("/", (req, res, next) => {
//   console.log("it is logged at " + Date());
//   next();
// });
// app.get("/", workingDays, (req, res) => {});
app.listen(5000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("the server is running at " + Date.valueOf());
  }
});
