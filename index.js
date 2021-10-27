const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//Database: fazendo conexão

connection
    .authenticate()
    .then(() => {
      console.log('Conexão com DB feita com sucesso!')  
    })
    .catch((msgErro) =>{
        console.log(msgErro);
    });


// Estou dizendo para o express isar o EJS como view engine
app.set('view engine','ejs');
app.use(express.static('publics'));

// pegar informaões do formulário e enviar pelo método POST
app.use(express.json())
app.use(express.urlencoded({ extended: true}));



//app.get('/', (req, res) => {
//   res.render("index.ejs",{
    
//});

// Rotas: comando para criá-las

app.get('/', (req, res) => {
    Pergunta.findAll({raw:true,order:[
        ['id','DESC'] //ASC
    ]}).then(perguntas => { //pegar as informações do DB (tabelas) e imprimí-las nos terminal do Node ({raw:true}) = cru
        res.render('index.ejs',{
            perguntas:perguntas,
        });
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.get('/principal', (req, res) => {
    res.render('principal');
});

// escrever para que método seja pego e exibido(enviado para o backend)

app.post('/respostasalva', (req, res)=> {
    var titulo= req.body.titulo;
    var textarea= req.body.textarea;
    var email= req.body.email;
     Pergunta.create({
        titulo: titulo,
        textarea: textarea
    }).then(() => {
        res.redirect('/');
    });
});

app.listen(8000,()=>{console.log("App On");
});