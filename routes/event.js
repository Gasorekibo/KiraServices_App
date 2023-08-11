import express from "express";
import { createEvent, getBookedEvent } from "../controllers/events.js";

// ======== CREATE EVENT ===========================

const router = express.Router();
router.post("/create-event", createEvent);
router.get("/booked-events", getBookedEvent);

export default router;
