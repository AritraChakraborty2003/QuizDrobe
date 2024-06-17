import express from "express";
import { PostScore } from "../Controller/PostScore.js";
import { getScore, getScoreId } from "../Controller/getScore.js";
const ScoreRouter = express.Router();

ScoreRouter.post("/", PostScore());
ScoreRouter.get("/", getScore);
ScoreRouter.get("/:id", getScoreId);

export { ScoreRouter };
