const {
  getJuegos,
  getJuegoById,
  getJuegosByCategory,
  postJuego,
  putJuego,
  deleteJuego
} = require('../controllers/juegos');

const juegosRouter = require('express').Router();

juegosRouter.get('/categoria/:categoria', getJuegosByCategory);
juegosRouter.get('/:id', getJuegoById);
juegosRouter.get('/', getJuegos);
juegosRouter.post('/', postJuego);
juegosRouter.put('/:id', putJuego);
juegosRouter.delete('/:id', deleteJuego);

module.exports = juegosRouter;
