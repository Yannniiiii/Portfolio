// backend/routes/aboutRoutes.js
import express from "express";
import { getAboutData } from "../controllers/aboutController.js";

const router = express.Router();

// GET /api/about
router.get("/", getAboutData);

export default router;