const {
  getConsolas,
  getConsolaById,
  postConsola,
  putConsola,
  deleteConsola
} = require('../controllers/consolas');
const { isUser, isAdmin } = require('../../middlewares/auth');

const consolasRouter = require('express').Router();

consolasRouter.get('/:id', getConsolaById);
consolasRouter.get('/', getConsolas);
consolasRouter.post('/', [isAdmin], postConsola);
consolasRouter.put('/:id', [isAdmin], putConsola);
consolasRouter.delete('/:id', [isAdmin], deleteConsola);

module.exports = consolasRouter;
