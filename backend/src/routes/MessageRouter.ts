import express, { Request, Response } from "express";
import { addMessage, getMessages } from "../controllers/MessageController";

const router = express.Router();

router.get("/", getMessages);
router.post("/", addMessage);

export default router;
