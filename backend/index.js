import express from "express";
import { adminRouter } from "./Routes/adminRouter.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { AttemptedRouter } from "./Routes/AttemptedRouter.js";
import { roundsRouter } from "./Routes/roundsRouter.js";
import { logResReq } from "./Middlewares/logResReq.js";
import { genRouter } from "./Routes/genRouter.js";
import { userRouter } from "./Routes/usersRouter.js";
import { questionsRouter } from "./Routes/questionRouter.js";
import DBConnectFunction from "./Connection/DbConnect.js";
import { feedBackRouter } from "./Routes/feedBackRouter.js";
import { ScoreRouter } from "./Routes/ScoreRouter.js";
import { leaderboardRouter } from "./Routes/leaderBoardRouter.js";

/* For Middlewares and dotenv config */
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
DBConnectFunction(`${process.env.MONGODB_URI}`);
app.use(logResReq("log.txt"));

/* For HTTP Requests from client*/
app.use("/", genRouter);
app.use("/api/users", userRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/rounds/", roundsRouter);
app.use("/api/feedback", feedBackRouter);
app.use("/api/score", ScoreRouter);
app.use("/api/attempted", AttemptedRouter);
app.use("/api/leaderboard", leaderboardRouter);
/* Starting of the express server*/
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
