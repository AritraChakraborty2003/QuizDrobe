import express from "express";
import { getAdmin } from "../Controller/getAdmin.js";
const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
//adminRouter.post("/", postAdmin());
export { adminRouter };
