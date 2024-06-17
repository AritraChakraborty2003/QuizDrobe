import express from "express";
import { PatchUsersID } from "../Controller/PatchUsers.js";
import { PatchUsers } from "../Controller/PatchUsers.js";
import { postUser } from "../Controller/postUsers.js";
import { getUsers, getUsersID } from "../Controller/getUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersID);
userRouter.post("/", postUser());
userRouter.patch("/", PatchUsers());
userRouter.patch("/Oscore", PatchUsersID());
export { userRouter };
