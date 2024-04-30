const mongoose = require('mongoose');

const juegoSchema= new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagenUrl: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'acción',
        'aventura',
        'arcade',
        'deportes',
        'rol',
        'estrategia',
        'simulación'
      ]
    }
  },
  {
    timestamps: true,
    collection: "juegos"
  }
)

const Juego = mongoose.model('Juegos', juegoSchema, "juegos");

module.exports = Juego;