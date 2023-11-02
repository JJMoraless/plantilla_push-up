import { request, response } from "express";
import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Ingrediente = db.collection("ingredientes");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class IngredientesCrll {
  static async create(req, res) {}

  // 1
  static async getStockless40(req, res) {
    const ingredientesFound = await Ingrediente.find({
      stock: { $lt: 400 },
    }).toArray();
    resOk(res, { ingredientes_menos_40_stock: ingredientesFound });
  }

  // 4
  static async increment15(req, res) {
    const ingredientesUpdated = await Ingrediente.updateMany(
      {},
      { $inc: { precio: 1.5 } }
    );
    const ingredientesFound = await Ingrediente.find().toArray();
    resOk(res, { ingredientesUpdated: ingredientesFound });
  }

  // 7
  static async deleteStock0(req, res) {
    const ingredientesDelete = await Ingrediente.deleteMany({ stock: 0 });
    resOk(res, { ingredientesDelete });
  }

  static async getMasCaro(req, res) {
    const ingredientesFound = await Ingrediente.find({})
      .sort({ precio: 1 })
      .toArray();
    const max = ingredientesFound[ingredientesFound.length - 1];
    const min = ingredientesFound[0];
    resOk(res, { ingrediente: max });
  }

  static async incrementPan100(req, res) {
    const panUdpated = await Ingrediente.updateOne(
      { nombre: "pan" },
      { $inc: { stock: 100 } }
    );
    resOk(res, { pan_incrementado: panUdpated });
  }

  static async getClasico(req, res) {
    const ingredientesClasicos = await Ingrediente.find({
      descripccion: "clasico",
    }).toArray();
    resOk(res, { ingredientesClasicos });
  }

  static async getBeetwen2y25(req, res) {
    const ingredientes = await Ingrediente.find({
      $and: [{ precio: { $gte: 2 } }, { precio: { $lte: 5 } }],
    }).toArray();
    resOk(res, { ingredientes });
  }

  static async putPanToCrujiente(req, res) {
    const ingrediente = await Ingrediente.updateOne(
      { nombre: "pan" },
      { $set: { descripccion: "crujiente" } }
    );
    resOk(res, { ingrediente });
  }

  static async getOrderAlfa(req, res) {
    const ingredientes = await Ingrediente.find().sort({ nombre: 1 }).toArray();
    resOk(res, { ingredientes });
  }
}
