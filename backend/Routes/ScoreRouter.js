import express from "express";
const ScoreRouter = express.Router();

ScoreRouter.post("/");
ScoreRouter.get("/");
ScoreRouter.get("/:id");

export { ScoreRouter };
