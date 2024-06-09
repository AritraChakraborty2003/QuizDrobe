import express from "express";
import { getUsers } from "../Controller/getUsers.js";
const genRouter = express.Router();

genRouter.get("/", getUsers);

export { genRouter };
