const db = require('../config/dataBase');

class Product{
    //pega todos os produtos do banco de dados da tabela produtos
    static getAll(callback){
        db.query("SELECT * FROM produtos", (err, results)=>{
            if(err) return callback(err, null);
            callback(null, results);
        })
    }


}

module.exports = Product;