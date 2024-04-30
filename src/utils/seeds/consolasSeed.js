const mongoose = require('mongoose'); 
const Consola = require('../../api/models/consolas');
const consolas = require('../../data/consolas');

const lanzarSemillaC = async ()=>{
  try{
    await mongoose.connect('mongodb+srv://elenadelatorre1806:uGaZvo7NJDj2TZZG@cluster0.lnxxkdc.mongodb.net/');

    await Consola.collection.drop();
    console.log('Consolas eliminadas');

    await Consola.insertMany(consolas);
    console.log('Consolas insertadas');

    await mongoose.disconnect();
    console.log('Conexión cerrada ❌');

  }catch (error){
    console.log("error", error);
  }
}

lanzarSemillaC();