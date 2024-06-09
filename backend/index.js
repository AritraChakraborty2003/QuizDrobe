const express = require("express");
const DBConnectFunction = require("./Connection/DbConnect.js");
const dotenv = require("dotenv");
const apiRouter = require("./Routes/apiRouter.js");
dotenv.config();
const app = express();
app.use("/api", apiRouter);
DBConnectFunction(`${process.env.MONGODB_URI}`);
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
