import { Router } from "express";
import HealthCheack from "../controllers/healthcheack.controller.js";

const router = Router();

router.route("/").get(HealthCheack);

export default router;
