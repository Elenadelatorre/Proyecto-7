require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const juegosRouter = require('./src/api/routes/juegos');
const consolasRouter = require('./src/api/routes/consolas');
const usersRoutes = require('./src/api/routes/user');

const app= express();
app.use(express.json());
connectDB();

app.use("/api/v1/juegos",juegosRouter);
app.use("/api/v1/consolas",consolasRouter);
app.use("/api/v1/users",usersRoutes);


app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
})
app.listen(3000, ()=> {
  console.log("Servidor levantado en: http://localhost:3000");
})