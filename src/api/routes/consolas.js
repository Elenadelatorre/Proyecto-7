const {getConsolas,getConsolaById}= require("../controllers/consolas")

const consolasRouter = require("express").Router();

consolasRouter.get("/:id", getConsolaById);
consolasRouter.get("/", getConsolas);

module.exports = consolasRouter;