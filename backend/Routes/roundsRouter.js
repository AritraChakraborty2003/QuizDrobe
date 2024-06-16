import express from "express";
import { postRoundDetails } from "../Controller/postRoundDetails.js";
import { getRoundDetails } from "../Controller/getRoundDetails.js";
const roundsRouter = express.Router();
roundsRouter.get("/", getRoundDetails);
roundsRouter.post("/", postRoundDetails());
export { roundsRouter };
