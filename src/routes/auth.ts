import { Router } from "express";
import { register, login } from "../controllers/auth";

const router = Router();

// routes for auth
router.post("/register", register);
router.post("/login", login);

export { router };
