import express from "express";

const AttemptedRouter = express.Router();

AttemptedRouter.post("/");
AttemptedRouter.get("/");

export { AttemptedRouter };
