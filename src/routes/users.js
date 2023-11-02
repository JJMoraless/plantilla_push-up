import { Router } from "express";
import { UserCrll } from "../controllers/users.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { userShema } from "../shemas/userShema.js";

export const router = Router();
router.post("/", userShema, wrapError(UserCrll.create));
