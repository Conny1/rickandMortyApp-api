import express from "express";
import { locationController } from "../controllers/index.js";

const router = express.Router();

router.get("/", locationController.findandfilterlocations);
router.get("/:id", locationController.getlocationbytid);

export default router;
