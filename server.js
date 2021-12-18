const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const req = require('express/lib/request');

//Configurando o multer manipular o caminho para pegar nome do arquivo
const path = require('path');

const app = express();

//função de middleware
app.use(bodyparser.urlencoded({extended:true}));

//Storage vai ficar o armazenamento em disco
const storage = multer.diskStorage({

  destination: (req,file,cb) => {
    //primeiro parametro verifica se tem erro, segundo o destino, 
    cb(null, 'uploads/')
  },
  //Informações sobre o nome do arquivo   / cb callback
  filename: (req,file,cb) => { //fieldname para pegar o nome do arquivo / path.extname pega a extensão do arquivo pdf gif png jpg tiff ... o file.orinalname
   //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

  function funcPegarDadosAtePontoExtensao(fileOriginalName, condicao) {
    return fileOriginalName.split(condicao, 1)[0]
  }

  cb(null, file.fieldname + '-' + funcPegarDadosAtePontoExtensao(file.originalname, ".") + '-' + Date.now() + path.extname(file.originalname));
  
  }
});


//criando a variavel upload que recebe o multer configurado e será chamada na rota de post para processar o arquivo
const upload = multer({storage});

//Rotas / Endpoints

app.get('/api/information', (req,res) => {
  res.json({message:'Hello World novamente!'});
});

app.get('', (req, res) => {
 res.sendFile(__dirname + '/index.html')
});


//Endpoint upload
//Pegando um unico arquivo single
//Req requisição res resposta  next proximo processo a ser executado
app.post('/upload', upload.single('arquivo'),(req,res,next) => {
 
  const file = req.file;
  //Verifica se arquivo existe dentro da constante file
  if (!file) {
    const err = new Error('Por favor selecione um arquivo!');
    err.httpStatusCode = 400;
    return next(err);
  }
  //Se estiver ok envia o file
  res.send(file);
  //res.end('Upload realizado com sucesso!');

});

port = 3000;

///Listando porta do server/rodar
value = `Server Running in ${port}`;
app.listen(port,'127.0.0.1',()=>{
  console.log(value);
});


//npm start server.js
//install bootstrap  
/// npm install bootstrap / yarn add bootstrap