import express from "express";
import { PostAttempts } from "../Controller/postAttempted.js";
import { getAttempts } from "../Controller/getAttempted.js";

const AttemptedRouter = express.Router();

AttemptedRouter.post("/", PostAttempts());
AttemptedRouter.get("/", getAttempts);

export { AttemptedRouter };
