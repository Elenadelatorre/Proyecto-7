const usersRoutes = require('express').Router();

const {
  register,
  login,
  getUsers,
  putUser,
  deleteUser
} = require('../controllers/user');
const { isUser, isAdmin } = require('../../middlewares/auth');

usersRoutes.get('/', [isUser], getUsers);
usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.put('/:id',[isAdmin], putUser);
usersRoutes.delete('/:id',[isAdmin], deleteUser);

module.exports = usersRoutes;
