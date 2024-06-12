import express from "express";
import { PostAdmin } from "../Controller/PostAdmin.js";
import { getAdmin } from "../Controller/getAdmin.js";
const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/", PostAdmin());
export { adminRouter };
