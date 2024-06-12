import express from "express";
import { PostQuestions } from "../Controller/postQuestions.js";
import { getQuestions } from "../Controller/getQuestions.js";
const questionsRouter = express.Router();

questionsRouter.get("/", getQuestions);
questionsRouter.post("/:id", PostQuestions());

export { questionsRouter };
