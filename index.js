//index.js file 
const express = require("express");
const cors = require("cors");
const Users = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(4000, () => console.log("Server running in: 4000"));
module.exports = app;
