const User = require('../api/models/user');
const { verifySign } = require('../config/jwt');

//Usuario normal:
const isUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json('No estás autorizado');
    }

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifySign(parsedToken);
    const user = await User.findById(id);

    user.contraseña = null;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json('No estás autorizado');
  }
};

//Administrador:
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json('No estás autorizado');
    }

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifySign(parsedToken);
    const user = await User.findById(id);

    //¿Es Administrador?
    if (user.rol === 'Admin') {
      user.contraseña = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json('No eres Administrador');
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado');
  }
};

module.exports = { isUser, isAdmin };
