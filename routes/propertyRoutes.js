import { Router } from "express";
const router = Router();
import { createProperty, getAllProperties } from "../controllers/propertyController.js";

router.get("/", getAllProperties);
router.post("/", createProperty);

export default router;
