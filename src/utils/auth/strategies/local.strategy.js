import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import db from "../../../../db/conection.js";
import { ClientError } from "../../errors.js";
const User = db.collection("users");

// validar las credenciales
// agrega un objeto user al request (el que viene de la busqueda a la db)

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      // buscar por email
      const user = await User.findOne({ email });
      if (!user) {
        throw new ClientError("email not found");
      }

      const isMatchPass = await compare(password, user.password);
      if (!isMatchPass) {
        throw new ClientError("password mismatch");
      }

      delete user.password;

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default localStrategy;
