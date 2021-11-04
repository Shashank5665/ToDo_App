const express = require("express");
const app = express();
const routerHome = require("./routes/homeRoute");
const mongoose = require("mongoose");
const db_link = require("./.env");
const DB = db_link;
//-------------------------------------------------------------------------------------------
// MIDDLEWARES
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//MIDDLEWARE FOR ROUTES
app.use("/", routerHome);
//-------------------------------------------------------------------------------------------
//CONNECTING TO MONGODB
mongoose.connect(DB).then(() => {
  console.log("DB is connected");
});
//-------------------------------------------------------------------------------------------
module.exports = app;
