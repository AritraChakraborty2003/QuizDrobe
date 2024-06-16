import express from "express";
import { adminRouter } from "./Routes/adminRouter.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { roundsRouter } from "./Routes/roundsRouter.js";
import { logResReq } from "./Middlewares/logResReq.js";
import { genRouter } from "./Routes/genRouter.js";
import { userRouter } from "./Routes/usersRouter.js";
import { questionsRouter } from "./Routes/questionRouter.js";
import DBConnectFunction from "./Connection/DbConnect.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
DBConnectFunction(`${process.env.MONGODB_URI}`);
app.use(logResReq("log.txt"));
app.use("/", genRouter);
app.use("/api/users", userRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/rounds/", roundsRouter);
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
