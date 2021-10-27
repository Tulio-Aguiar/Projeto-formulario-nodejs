//definindo e criando model, criando tabela

const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    textarea:{
        type: Sequelize.TEXT,
        allowNull:false
    }
   
});





//criando de fato a tabela no banco para

Pergunta.sync({force:false}).then(() => {});   //chama o model pra dentro do mysql após criar a variável

module.exports = Pergunta;


