import express from "express";
import { episodeController } from "../controllers/index.js";

const router = express.Router();

router.get("/", episodeController.findandfilterepisodes);
router.get("/:id", episodeController.getepisodebytid);

export default router;
