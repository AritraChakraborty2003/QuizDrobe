import express from "express";
import { PostFeedback } from "../Controller/PostFeedback.js";
import { getFeedback, getFeedbackId } from "../Controller/getFeedback.js";
const feedBackRouter = express.Router();

feedBackRouter.get("/", getFeedback);
feedBackRouter.get("/:id", getFeedbackId);
feedBackRouter.post("/", PostFeedback());

export { feedBackRouter };
