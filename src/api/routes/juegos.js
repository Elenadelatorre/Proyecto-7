const {
  getJuegos,
  getJuegoById,
  getJuegosByCategory,
  postJuego,
  deleteJuego
} = require('../controllers/juegos');

const juegosRouter = require('express').Router();

juegosRouter.get('/categoria/:categoria', getJuegosByCategory);
juegosRouter.get('/:id', getJuegoById);
juegosRouter.get('/', getJuegos);
juegosRouter.post('/', postJuego);
juegosRouter.delete('/:id', deleteJuego);

module.exports = juegosRouter;
