const mongoose = require("mongoose");
const DBConnectFunction = (url) => {
  mongoose.connect(url);
  console.log("MongoDB Connected");
};

module.exports = DBConnectFunction;
