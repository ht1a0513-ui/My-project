import express from "express";

import {
  getRegistrations,
  createRegistration,
  deleteRegistration,
} from "../controllers/registrationController.js";

const router = express.Router();

router.get("/", getRegistrations);

router.post("/", createRegistration);

router.delete("/:id", deleteRegistration);

export default router;