import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";
import express from "express";
import { authCheck } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login",login);
router.post("/register", register);

export default router;