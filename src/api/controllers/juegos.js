const Juego = require('../models/juegos');

//! GET - Obtener todos los juegos:
const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find();
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//! GET id - Obtener un juego por id:
const getJuegoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juego = await Juego.findById(id);
    return res.status(200).json(juego);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//! GET un juego por categoría:
const getJuegosByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const juegos = await Juego.find({ categoria });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//!POST - Publicar un juego:
const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body);
    const juegoSaved = await newJuego.save();
    return res.status(201).json(juegoSaved);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//! PUT - Modificar un juego por id:
const putJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newJuego = new Juego(req.body);
    newJuego._id = id;
    const juegoUpdated = await Juego.findByIdAndUpdate(id, newJuego, {
      new: true,
    });
    return res.status(200).json(juegoUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};


//! DELETE - Eliminar un juego por id:
const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeleted = await Juego.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Elemento eliminado', elemento: juegoDeleted });
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

module.exports = { getJuegos, getJuegoById, getJuegosByCategory, postJuego, putJuego, deleteJuego };
