const express = require('express');
const router = express.Router();
const Produto = require("../models/productModel");

//Rota para a lista dos produtos
router.get("/", (req, res)=>{
    Produto.getAll((err, produtos)=>{
        if(err){
            return res.status(500).json({erro: "Erro ao buscar produtos..."});
        }
        else{
            res.json(produtos);
        }
    });
});

module.exports = router;