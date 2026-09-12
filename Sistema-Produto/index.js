const express = require('express');
const session = require('express-session');
const path = require('path');

const produtoController = require('./src/controllers/produtoController');
const authController = require('./src/controllers/authController');
const { autenticado, apenasAdmin } = require('./src/middlewares/authMiddleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'chave_secreta_leanexpress',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Rotas de Autenticação
app.get('/login', authController.renderLogin);
app.post('/login', authController.login);
app.get('/cadastrar', authController.renderCadastro);
app.post('/cadastrar', authController.cadastrar);
app.get('/logout', authController.logout);

// Rotas Protegidas de Produtos
app.get('/', autenticado, produtoController.index);
app.post('/salvar', autenticado, apenasAdmin, produtoController.salvar);
app.get('/editar/:id', autenticado, apenasAdmin, produtoController.editar);
app.post('/atualizar/:id', autenticado, apenasAdmin, produtoController.atualizar);
app.get('/deletar/:id', autenticado, apenasAdmin, produtoController.deletar);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));