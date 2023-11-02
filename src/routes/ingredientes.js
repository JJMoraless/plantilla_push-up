import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import { IngredientesCrll } from "../controllers/ingredientes.js";
import routesVersioning from "express-routes-versioning";
import { checkRoles } from "../middlewares/rolesHandler.js";

export const router = Router();
router.use(passportJwt);
router.use(checkRoles("admin"));

const version = routesVersioning();
router.get(
  "/stock40",
  version({
    "1.0.0": wrapError(IngredientesCrll.getStockless40),
  })
);

router.get(
  "/increment",
  version({
    "1.0.0": wrapError(IngredientesCrll.increment15),
  })
);

router.get(
  "/precios/masCaro",
  version({
    "1.0.0": wrapError(IngredientesCrll.getMasCaro),
  })
);

router.get(
  "/pan/increment",
  version({
    "1.0.0": wrapError(IngredientesCrll.incrementPan100),
  })
);

router.get(
  "/clasico",
  version({
    "1.0.0": wrapError(IngredientesCrll.getClasico),
  })
);

router.get(
  "/precios/beetwen2y25",
  version({
    "1.0.0": wrapError(IngredientesCrll.getBeetwen2y25),
  })
);

router.get(
  "/order_alfabetico",
  version({
    "1.0.0": wrapError(IngredientesCrll.getOrderAlfa),
  })
);

router.put(
  "/pan/descripcion/to_crugiente",
  version({
    "1.0.0": wrapError(IngredientesCrll.putPanToCrujiente),
  })
);

router.delete(
  "/deleteStock0",
  version({
    "1.0.0": wrapError(IngredientesCrll.deleteStock0),
  })
);
