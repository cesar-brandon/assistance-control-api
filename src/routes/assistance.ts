import { Router } from "express";
import { putAssistance } from "../controllers/assistance";
import { checkSession } from "../middlewares/session";

const router = Router();

router.put("/", checkSession, putAssistance);

export { router };
