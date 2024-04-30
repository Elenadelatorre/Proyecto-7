const Consola = require("../models/consolas");

//! GET - Obtener todas las consolas:

const getConsolas = async (req, res,next) => {
  try {
    const consolas = await Consola.find();
    return res.status(200).json(consolas);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//! GET una consola por id:

const getConsolaById = async (req, res,next) => {
  try {
    const {id}=req.params;
    const consola = await Consola.findById(id);
    return res.status(200).json(consola);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

module.exports = {getConsolas, getConsolaById};