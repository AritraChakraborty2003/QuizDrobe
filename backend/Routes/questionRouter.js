import express from "express";
import { getQuestions } from "../Controller/getQuestions.js";
const questionsRouter = express.Router();

questionsRouter.get("/", getQuestions);

export { questionsRouter };
