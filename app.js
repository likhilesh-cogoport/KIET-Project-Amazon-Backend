const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const app = express();

app.use(express.json());
app.use('/api/products', productsRouter)

module.exports = app;
