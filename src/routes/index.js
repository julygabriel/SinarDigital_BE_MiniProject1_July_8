const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const { name, phone } = req.body;
  const fileData = fs.readFileSync("data/data.json", "utf-8");
  const users = JSON.parse(fileData);

  users.push({
    name,
    phone,
  });

  fs.writeFileSync("data/data.json", JSON.stringify(users, null, 2));

  // 5. Redirect kembali ke halaman form (atau halaman sukses)
  res.redirect("/contact");
});

module.exports = router;
