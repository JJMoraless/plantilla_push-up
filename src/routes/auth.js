import { Router } from "express";
import { AuthCrll } from "../controllers/auth.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportLocal } from "../utils/auth/index.js";

export const router = Router();
router.use(passportLocal);
router.post("/login", wrapError(AuthCrll.login));
