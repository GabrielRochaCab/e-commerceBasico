require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

//importar rotas
const productRoute = require('./routes/productsRouter')

//usando rotas
app.use('/products', productRoute);

app.listen(3000, ()=>{
    console.log("servidor rodando na porta: http://localhost:3000");
});
