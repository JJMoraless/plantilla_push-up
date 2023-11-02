import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import routesVersioning from "express-routes-versioning";
import { HamburguesasCrll } from "../controllers/hamburguesas.js";
import { checkRoles } from "../middlewares/rolesHandler.js";

export const router = Router();
router.use(passportJwt);
const version = routesVersioning();
router.use(checkRoles("admin"));

router.get(
  "/vegetarianas",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getVegetarianas),
  })
);

router.get(
  "/categorias",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getCategorias),
  })
);

router.put(
  "/clasica/ingredientes",
  version({
    "1.0.0": wrapError(HamburguesasCrll.putIngredienteClasica),
  })
);

router.get(
  "/ingredientes/pan_integral",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getIntegral),
  })
);

router.get(
  "/ingredientes/no_chedar",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getNoChedar),
  })
);

router.get(
  "/precio9",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getPrecioLte9),
  })
);

router.get(
  "/categorias/gourmet",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getCategoriesGourmet),
  })
);

router.put(
  "/gourmet/increment2",
  version({
    "1.0.0": wrapError(HamburguesasCrll.putIncrementGourmet),
  })
);

router.get(
  "/precios/order",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getOrderByPrice),
  })
);

router.get(
  "/tomateOlechuga",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getTomaeOlechuga),
  })
);

router.get(
  "/mas_cara",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getMasCara),
  })
);

router.get(
  "/5ingredientes",
  version({
    "1.0.0": wrapError(HamburguesasCrll.get5igredientes),
  })
);

router.get(
  "/promedioCategoria",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getPromedioCategoria),
  })
);

router.put(
  "/pepinillosToClasica",
  version({
    "1.0.0": wrapError(HamburguesasCrll.putPepinillos),
  })
);
