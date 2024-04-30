const Consola = require("../models/consolas");

//! GET - Obtener todas las consolas:

const getConsolas = async (req, res,next) => {
  try {
    const consolas = await Consola.find().populate("juegos");
    return res.status(200).json(consolas);
  } catch (error) {
    console.error(error);
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

//! POST - Crear una consola:
const postConsola = async (req, res, next) => {
  try {
    const newConsola = new Consola(req.body);
    const consolaSaved = await newConsola.save();
    return res.status(201).json(consolaSaved);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//! PUT - Modificar consola por id:
const putConsola = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newConsola = new Consola(req.body);
    newConsola._id = id;
    const consolaUpdated = await Consola.findByIdAndUpdate(id, newConsola, {
      new: true,
    });
    return res.status(200).json(consolaUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

//! DELETE - Eliminar una consola por id:
const deleteConsola = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consolaDeleted = await Consola.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Elemento eliminado', elemento: consolaDeleted });
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

module.exports = {getConsolas, getConsolaById,postConsola, putConsola, deleteConsola};