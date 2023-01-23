import { Router } from "express";
import { register, login } from "../controllers/auth";
import { checkSession } from "../middlewares/session";

const router = Router();

// routes for auth
router.post("/register", checkSession, register);
router.post("/login", login);

export { router };
