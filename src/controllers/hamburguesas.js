import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Hamburguesa = db.collection("hamburguesas");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class HamburguesasCrll {
  static async create(req, res) {}

  // 2
  static async getVegetarianas(req, res) {
    const hamburguesas = await Hamburguesa.find({
      "categoria.nombre": "Vegetariana",
    }).toArray();

    resOk(res, { hamburguesas });
  }

  static async getCategorias(req, res) {
    const categoriasFound = await Hamburguesa.aggregate([
      {
        $project: {
          categoria: 1,
        },
      },
    ]).toArray();

    resOk(res, { categorias: categoriasFound });
  }

  static async putIngredienteClasica(req, res) {
    const nuevoIngrediente = await Hamburguesa.updateMany(
      { "categoria.nombre": "clasica" },
      {
        $push: {
          ingredientes: {
            nombre: "papas",
            precio: 100,
          },
        },
      }
    );

    resOk(res, { nuevoIngrediente });
  }

  static async getIntegral(req, res) {
    const hamburguesas = await Hamburguesa.find({
      "ingredientes.nombre": "Pan integral",
    }).toArray();
    resOk(res, { hamburguesas });
  }

  static async getNoChedar(req, res) {
    const hamburguesas = await Hamburguesa.find({
      "ingredientes.nombre": { $ne: "queso chedar" },
    }).toArray();

    resOk(res, { hamburguesas });
  }

  static async getPrecioLte9(req, res) {
    const hamburguesas = await Hamburguesa.find({
      precio: { $lte: 9 },
    }).toArray();

    resOk(res, { hamburguesas });
  }

  static async getCategoriesGourmet(req, res) {
    const hamburguesas = await Hamburguesa.aggregate([
      {
        $unwind: "$categoria",
      },
      {
        $project: {
          categoria: 1,
        },
      },
      {
        $match: { "categoria.nombre": "gourmet" },
      },
    ]).toArray();

    resOk(res, { hamburguesas });
  }

  static async deleteLess5Ingredientes(req, res) {
    const hamburguesas = await Hamburguesa.find().toArray();
    resOk(res, { hamburguesas });
  }

  static async getOrderByPrice(req, res) {
    const hamburguesasOrder = await Hamburguesa.find()
      .sort({ precio: 1 })
      .toArray();
    resOk(res, { hamburguesasOrder });
  }

  static async getTomaeOlechuga(req, res) {
    const hamburguesasOrder = await Hamburguesa.find({
      $or: [
        { "ingredientes.nombre": "tomate" },
        { "ingredientes.nombre": "lechuga" },
      ],
    }).toArray();
    resOk(res, { hamburguesasOrder });
  }

  static async putIncrementGourmet(req, res) {
    const hamburguesasIncrementadas = await Hamburguesa.updateMany(
      {
        "categoria.nombre": "gourmet",
      },
      { $inc: { precio: 2 } }
    );

    const hamburguesasFound = await Hamburguesa.find({
      "categoria.nombre": "gourmet",
    }).toArray();

    resOk(res, { hamburguesasFound });
  }

  static async getMasCara(req, res) {
    const ingredientesFound = await Hamburguesa.find({})
      .sort({ precio: 1 })
      .toArray();
    const max = ingredientesFound[ingredientesFound.length - 1];
    resOk(res, { hamburguesas_mas_cara: max });
  }

  static async putPepinillos(req, res) {
    const hamburguesasUpdated = await Hamburguesa.updateMany(
      { "categoria.nombre": "clasica" },
      { $push: { ingredientes: { nombre: "pepinillo", precio: 100 } } }
    );

    resOk(res, { hamburguesasUpdated });
  }

  static async get5igredientes(req, res) {
    const ingredientesFound = await Hamburguesa.find({
      ingredientes: { $size: 5 },
    }).toArray();
    resOk(res, { ingredientesFound });
  }


  static async getPromedioCategoria(req, res) {
    const cheftInsert = await Hamburguesa.aggregate([
      {
        $group: {
          _id: "$categoria.nombre",
          promedio_precio: { $avg: "$precio" },
        },
      },
    ]).toArray();
    resOk(res, { cheftInsert });
  }
}
