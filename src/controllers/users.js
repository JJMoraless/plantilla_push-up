import { request, response } from "express";

import db from "../../db/conection.js";
import { resOk } from "../utils/functions.js";
import { hash } from "bcrypt";
import { ClientError } from "../utils/errors.js";
const User = db.collection("users");

export class UserCrll {
  static async create(req, res) {
    const userData = req.body;
    userData.password = await hash(userData.password, 10);

    // checkear si existe email: checkEmail
    const checkEmail = await User.findOne({ email: userData.email });
    if (checkEmail) {
      throw new ClientError("email is already in use");
    }

    // crear usuario
    const userCreated = await User.insertOne(userData);
    resOk(res, { user_create: userCreated });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async delete(res, req = request) {}
}
