//Importar módulos:
require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const juegosRouter = require('./src/api/routes/juegos');
const consolasRouter = require('./src/api/routes/consolas');
const usersRoutes = require('./src/api/routes/user');

//Configuración
const app= express();
app.use(express.json());
connectDB();

//Rutas
app.use("/api/v1/juegos",juegosRouter);
app.use("/api/v1/consolas",consolasRouter);
app.use("/api/v1/users",usersRoutes);

//Manejo de rutas inexistentes
app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
})

//Escuchar puerto
app.listen(3000, ()=> {
  console.log("Servidor levantado en: http://localhost:3000");
})