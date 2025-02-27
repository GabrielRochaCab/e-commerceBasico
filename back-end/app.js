require('dotenv').config();
require("./src/config/dataBase");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const productRoute = require("./src/routes/productsRoutes");

app.use(express.json());

//Rotas
app.use("/products", productRoute);


app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

