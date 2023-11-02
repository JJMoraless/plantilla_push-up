import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Chef = db.collection("chefs");
const Hamburguesa = db.collection("hamburguesas");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class HamburguesasCrll {
  static async create(req, res) {}

  // 3
  static async getCarnes(req, res) {
    const chefsFound = await Chef.find({
      especialidad: "Carnes",
    }).toArray();

    resOk(res, { chefs: chefsFound });
  }

  // 5
  static async getHamburguesasByChefB(req, res) {
    const chefsFound = await Hamburguesa.find({
      chef: "Checfb",
    }).toArray();
    resOk(res, { chefs: chefsFound });
  }

  static async putEspecialidad(req, res) {
    const chefUpdated = await Chef.updateOne(
      {
        nombre: "Checfb",
      },
      {
        $set: { especialidad: "Cocina Internacional" },
      }
    );

    resOk(res, { chefUpdated });
  }

  static async getCount(req, res) {
    const countChefs = (await Chef.find().toArray()).length;
    resOk(res, { total_chefs: countChefs });
  }

  static async postCocinaAsiatica(req, res) {
    const cheftInsert = await Chef.insertOne({
      ...req.body,
      especialidad: "Cocina Asiática",
    });
    resOk(res, { cheftInsert });
  }

  static async getNotChefA(req, res) {
    const cheftInsert = await Chef.find({ nombre: { $ne: "ChefA" } }).toArray();
    resOk(res, { cheftInsert });
  }

  static async deleteVegetarianos(req, res) {
    const hamburguesasUpdated = await Chef.deleteMany(
      { especialidad: "Cocina Vegetariana" },
      { $push: { ingredientes: { nombre: "pepinillo", precio: 100 } } }
    );
    resOk(res, { hamburguesasUpdated });
  }

  static async getMasCaraGourmet(req, res) {
    const cheftInsert = await Hamburguesa.aggregate([
      {
        $match: { chef: "Gourmet" },
      },
      {
        $group: {
          _id: "$chef",
          precio_mas_cara: { $max: "$precio" },
        },
      },
    ]).toArray();
    resOk(res, { cheftInsert });
  }

  static async getHamburguesasVendidas(req, res) {
    const cheftInsert = await Hamburguesa.aggregate([
      {
        $group: {
          _id: "$chef",
          hamburguesasVendidas: { $sum: 1 },
        },
      },
    ]).toArray();
    resOk(res, { cheftInsert });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
