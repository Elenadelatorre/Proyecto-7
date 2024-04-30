const mongoose = require('mongoose'); 
const Juego = require('../../api/models/juegos');
const juegos = require('../../data/juegos');

const lanzarSemillaJ = async ()=>{
  try{
    await mongoose.connect('mongodb+srv://elenadelatorre1806:uGaZvo7NJDj2TZZG@cluster0.lnxxkdc.mongodb.net/');

    await Juego.collection.drop();
    console.log('Juegos eliminados');

    await Juego.insertMany(juegos);
    console.log('Juegos insertados');

    await mongoose.disconnect();
    console.log('Conexión cerrada ❌');

  }catch (error){
    console.log("error", error);
  }
}

lanzarSemillaJ();