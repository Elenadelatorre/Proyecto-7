const mongoose = require('mongoose');

const consolaSchema= new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  lanzamiento: { type: Date, required: true },
  fabricante: { type: String, required: true },
  juegos: [{ type: mongoose.Types.ObjectId, ref: 'juegos', required: false }]
  //Relacionar con la colección "juegos"
},
{
  timestamps: true,
  collection: 'consolas'
});


const Consola = mongoose.model('consolas', consolaSchema, 'consolas');

module.exports = Consola;