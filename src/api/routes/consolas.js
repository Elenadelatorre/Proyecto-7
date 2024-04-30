const {
  getConsolas,
  getConsolaById,
  postConsola,
  putConsola,
  deleteConsola
} = require('../controllers/consolas');

const consolasRouter = require('express').Router();

consolasRouter.get('/:id', getConsolaById);
consolasRouter.get('/', getConsolas);
consolasRouter.post('/', postConsola);
consolasRouter.put('/:id', putConsola);
consolasRouter.delete('/:id', deleteConsola);

module.exports = consolasRouter;
