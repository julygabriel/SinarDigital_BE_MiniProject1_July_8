const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const fileData = fs.readFileSync("data/data.json", "utf-8");
  const users = JSON.parse(fileData);

  console.log(users);

  res.render("show", {
    name: users[0].name,
    phone: users[0].phone,
  });
});

module.exports = router;
