import { check } from "express-validator";
import { fieldsHandler } from "../middlewares/shemasHandler.js";

export const userShema = [
  check("email").isString().isEmail(),
  check("password").isString(),
  check("role")
    .isString()
    .isIn("admin", "user")
    .withMessage("rol no permitido"),
  fieldsHandler("email", "password", "role"),
];
