import express from "express";
import { generateRandom } from "../Controller/getUsers.js";
const genRouter = express.Router();

genRouter.get("/", generateRandom);

export { genRouter };
