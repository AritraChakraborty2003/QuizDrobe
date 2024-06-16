import express from "express";
import { PatchUsers } from "../Controller/PatchUsers.js";
import { postUser } from "../Controller/postUsers.js";
import { getUsers, getUsersID } from "../Controller/getUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersID);
userRouter.post("/", postUser());
userRouter.patch("/", PatchUsers());
export { userRouter };
