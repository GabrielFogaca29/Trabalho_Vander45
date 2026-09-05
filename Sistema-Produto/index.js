const express = require('express');
const path = require('path');
const produtoController = require('./src/controllers/produtoController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Rotas da aplicação LeanExpress
app.get('/', produtoController.index);
app.post('/salvar', produtoController.salvar);
app.get('/editar/:id', produtoController.editar);
app.post('/atualizar/:id', produtoController.atualizar);
app.get('/deletar/:id', produtoController.deletar);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor LeanExpress rodando em http://localhost:${PORT}`);
});