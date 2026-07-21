import express from "express";

import {
  getParticipants,
  getParticipant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} from "../controllers/participantController.js";

const router = express.Router();

router.get("/", getParticipants);

router.get("/:id", getParticipant);

router.post("/", createParticipant);

router.put("/:id", updateParticipant);

router.delete("/:id", deleteParticipant);

export default router;
