const express = require("express");
const indexRoute = require("./src/routes/index");
const aboutRoute = require("./src/routes/about");
const showRoute = require("./src/routes/show");
const app = express();
const fs = require("fs"); // Import modul File System
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", indexRoute);
app.use("/contact", showRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
