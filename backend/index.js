import express from "express";
import dotenv from "dotenv";
import { logResReq } from "./Middlewares/logResReq.js";
import { genRouter } from "./Routes/genRouter.js";
import { userRouter } from "./Routes/usersRouter.js";
import DBConnectFunction from "./Connection/DbConnect.js";
dotenv.config();

const app = express();
DBConnectFunction(`${process.env.MONGODB_URI}`);
app.use(logResReq("log.txt"));
app.use("/", genRouter);
app.use("/api/users", userRouter);

app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
