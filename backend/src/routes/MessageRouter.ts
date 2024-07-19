import express from "express";
import { addMessage, getMessages } from "../controllers/MessageController";
import requireAuth from "../middlewares/authMiddelware";

const router = express.Router();

router.get("/", requireAuth, getMessages);
router.post("/", addMessage);

export default router;
