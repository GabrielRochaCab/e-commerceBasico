const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) =>{
    if(err){
        console.log("Falha ao se conectar com o Banco de Dados",err)
    }
    else{
        console.log("Conectado ao Banco de dados!")
    }
})

module.exports = connection;