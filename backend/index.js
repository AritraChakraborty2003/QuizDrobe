import express from "express";
import dotenv from "dotenv";
import DBConnectFunction from "./Connection/DbConnect.js";
dotenv.config();

const app = express();
DBConnectFunction(`${process.env.MONGODB_URI}`);
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
