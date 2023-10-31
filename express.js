const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 19006;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });

  db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
  });

/*app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
  
});*/

app.post('/dados',(req, res) =>{
    const nome = req.body.nome
    const email = req.body.email
    
    console.log("input nome: "+ req.body.nome);
    console.log("input email: "+ req.body.email);
    
    let sql = 'INSERT INTO users (nome,email) VALUES (?,?)';
    let data =[nome,email]
    db.query(sql,data,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.json({ message : 'dados inseridos',nome:nome,email:email})
    })
})

app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
