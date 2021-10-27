//Criando forma de declarar no JS chamada para banco de dados(mysql)!

const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','*tu#@666',{
    host:'localhost',
    dialect:'mysql',
    logging: false // para 1+1 no console
});

module.exports = connection;