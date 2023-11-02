import { check } from "express-validator";
import { fieldsHandler } from "../middlewares/shemasHandler.js";

export const chefShema = [
  check("nombre").isString(),
  check("especialidad").isString().isIn(["Cocina Asiática"]).withMessage("especialidad debe ser Cocina Asiática"),
  fieldsHandler("nombre", "especialidad")
];
