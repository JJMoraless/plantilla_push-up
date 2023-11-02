import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import routesVersioning from "express-routes-versioning";
import { HamburguesasCrll } from "../controllers/chefs.js";
import { checkRoles } from "../middlewares/rolesHandler.js";
import { chefShema } from "../shemas/chefShema.js";
export const router = Router();

const version = routesVersioning();

router.use(passportJwt);
router.use(checkRoles("admin"));
router.get(
  "/especialidad/carnes",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getCarnes),
  })
);

router.get(
  "/checfb/hamburguesas",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getHamburguesasByChefB),
  })
);
router.get(
  "/total",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getCount),
  })
);

router.put(
  "/especialidad/change/chefc",
  version({
    "1.0.0": wrapError(HamburguesasCrll.putEspecialidad),
  })
);

router.get(
  "/noChefA",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getNotChefA),
  })
);

router.get(
  "/noChefA",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getNotChefA),
  })
);

router.get(
  "/mas_cara_gourmet",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getMasCaraGourmet),
  })
);

router.get(
  "/total_vendido",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getHamburguesasVendidas),
  })
);

router.post(
  "/cocina_asiatica",
  chefShema,
  version({
    "1.0.0": wrapError(HamburguesasCrll.postCocinaAsiatica),
  })
);

router.delete(
  "/vegetarianos",
  version({
    "1.0.0": wrapError(HamburguesasCrll.deleteVegetarianos),
  })
);
