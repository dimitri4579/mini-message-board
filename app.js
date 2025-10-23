// app.js
require('dotenv').config();
const path = require("node:path");
const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


// ROUTERS
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});