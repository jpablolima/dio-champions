import { Router } from "express";
import { getPlayer, getPlayerByID } from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerByID);

export default router;
