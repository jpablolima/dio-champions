import { Router } from "express";
import {
  getPlayer,
  getPlayerByID,
  postPlayer,
  deletePlayer,
} from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerByID);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);

export default router;
