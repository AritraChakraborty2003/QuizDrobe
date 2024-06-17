import express from "express";
import { getScore, getScoreId } from "../Controller/getScore.js";
const ScoreRouter = express.Router();

ScoreRouter.post("/");
ScoreRouter.get("/", getScore);
ScoreRouter.get("/:id", getScoreId);

export { ScoreRouter };
