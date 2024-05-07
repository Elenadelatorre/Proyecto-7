const User = require('../models/user');
const bcrypt = require('bcrypt');
const {generateSign} = require('../../config/jwt');

//! POST - REGISTER
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      nombreUsuario: req.body.nombreUsuario,
      contraseña: req.body.contraseña,
      añoNacimiento: req.body.añoNacimiento,
      imagenPerfil: req.body.imagenPerfil,
      rol: "User"
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
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json('El usuario o la contraseña son incorrectos');
    }

    if (bcrypt.compareSync(req.body.contraseña, user.contraseña)) {
      const token = generateSign(user._id);
      return res.status(200).json({ user,token });
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos');
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error al iniciar sesión');
  }
};

//! GET users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

//! PUT user
const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User(req.body);
    newUser._id = id;
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};
//! DELETE user 
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json({
      mensaje: "Este usuario ha sido eliminado",
      userDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};


module.exports = {
  register,
  login, getUsers, putUser, deleteUser
};
