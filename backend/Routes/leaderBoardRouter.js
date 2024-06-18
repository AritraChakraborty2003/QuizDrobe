import express from "express";
import { getLeaderboard } from "../Controller/getLeaderboard.js";
import { PatchLeaderboard } from "../Controller/PatchLeaderboard.js";

const leaderboardRouter = express.Router();

leaderboardRouter.get("/", getLeaderboard);
leaderboardRouter.patch("/", PatchLeaderboard());

export { leaderboardRouter };
