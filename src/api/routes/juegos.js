const {
  getJuegos,
  getJuegoById,
  getJuegosByCategory,
  postJuego,
  putJuego,
  deleteJuego
} = require('../controllers/juegos');

const { isUser, isAdmin } = require('../../middlewares/auth');

const juegosRouter = require('express').Router();

juegosRouter.get('/categoria/:categoria', getJuegosByCategory);
juegosRouter.get('/:id', getJuegoById);
juegosRouter.get('/', getJuegos);
juegosRouter.post('/', [isAdmin], postJuego);
juegosRouter.put('/:id', [isAdmin], putJuego);
juegosRouter.delete('/:id', [isAdmin], deleteJuego);

module.exports = juegosRouter;
