const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  nombreUsuario: { type: String, trim: true, required: true, unique: true },
  contraseña: { type: String, trim: true, required: true },
  añoNacimiento: { type: Number, trim: true, required: true },
  rol: { type: String, trim: true, required: true },
  imagenPerfil: { type: String, trim: true, required: true }
},{
  timestamps: true,
  collection: 'users'
});

const User = mongoose.model('users', userSchema, 'users');

module.exports = User;