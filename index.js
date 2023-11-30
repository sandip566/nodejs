const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/sandip");

const sandiRoute = require("./routes/sandiroute");
app.use("/profile", sandiRoute);

app.listen(port, ()=>{
  console.log(`App is running on port ${port}`);
});

