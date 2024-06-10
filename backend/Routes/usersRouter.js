import express from "express";
import { postUser } from "../Controller/postUsers.js";
import { getUsers } from "../Controller/getUsers.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUser());
export { userRouter };
