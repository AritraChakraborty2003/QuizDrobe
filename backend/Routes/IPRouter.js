import express from "express";
import { getIPData } from "../Controller/getIPData.js";
const IPRouter = express.Router();
IPRouter.get("/", getIPData);

export { IPRouter };
