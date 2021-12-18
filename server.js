const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const req = require('express/lib/request');

const app = express();

//função de middleware
app.use(bodyparser.urlencoded({extended:true}));

app.get('/api/information', (req,res) => {
    res.json({message:'Hello World novamente!'});
});

app.get('', (req, res) => {
   res.sendFile(__dirname + '/index.html')
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