import { request, response } from "express";
import { createToken } from "../utils/jwt.js";
import { resOk } from "../utils/functions.js";


// en la ruta se usa local strategy que valida las credenciales
// local strategy agrega objeto user al request con los datos de la db

export class AuthCrll {
  static async login(req = request, res = response) {
    const { user } = req;
    console.log("🚀 ~ file: auth.js:8 ~ AuthCrll ~ login ~ user:", user)

    const token = await createToken({
      sub: user._id,
      role: user.role,
    });
    
    resOk(res, { token });
  }
}
