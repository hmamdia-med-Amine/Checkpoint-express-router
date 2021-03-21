const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("homepage");
});

router.get("/ContactUs", (req, res) => {
  res.sendFile;
});

router.get("/OurServices", (req, res) => {
  res.send("OurServices");
});

module.exports = router;

// app.all("/", function (req, res, next) {
//   console.log("Accessing the secret section...");
//   next();
// });

// app
//   .get("/", function (req, res) {
//     res.send("get request to the homepage");
//   })
//   .post("/", function (req, res) {
//     res.send("post request to the homepage");
//   })
//   .all("/", function (req, res) {});
