import express from "express";
import { characterController } from "../controllers/index.js";

const router = express.Router();

router.get("/", characterController.findandfiltercharacters);
router.get("/:id", characterController.getcharacterbytid);

export default router;
