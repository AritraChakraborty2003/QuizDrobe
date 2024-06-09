const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  const myObj = {
    name: "Somnath",
    age: 63,
    desig: "Ex Railway Employee",
  };
  return res.json(myObj);
});
module.exports = Router;
