const User = require('../models/user');
const bcrypt = require('bcrypt');

//! POST - REGISTER
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      nombreUsuario: req.body.nombreUsuario,
      contraseña: req.body.contraseña,
      añoNacimiento: req.body.añoNacimiento,
      imagenPerfil: req.body.imagenPerfil
    });

    const userDuplicated = await User.findOne({ email: req.body.email });

    if (userDuplicated) {
      return res.status(400).json('El usuario ya existe');
    }
    const userSaved = await newUser.save();

    return res.status(201).json(userSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error al registrar al usuario');
  }
};

//! POST - LOGIN
// const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({email: req.body.email});

//     if(!user){
//       return res.status(400).json("El usuario o la contraseña son incorrectos");
//     }

//   }
// }

module.exports = {
  register
};
