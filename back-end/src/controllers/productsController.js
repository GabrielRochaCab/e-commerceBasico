const db = require("../config/db");

exports.listProduct = (req, res) => {
    db.query('SELECT * FROM produtos', (err, results)=>{
        if(err){
            console.log('Erro ao buscar produtos', err);
            res.status(500).json({ error: 'Erro no servidor' });
        }
        else if (results.length === 0) {
            return res.status(404).json({ message: 'Nenhum produto encontrado.' });
        }
        else{
            res.json(results);
        }
    })
}