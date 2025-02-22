require('dotenv').config();

const mysql = require('mysql2');

//conexão com banco de dados mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

connection.connect(err =>{
    if(err){
        console.log('Erro ao se conectar ao banco de dados', err);
    } 
    else{
        console.log('conectado ao banco de dados')
    }
})

module.exports = connection;