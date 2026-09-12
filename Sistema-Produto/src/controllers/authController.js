const usuarioDAO = require('../dao/usuarioDAO');

module.exports = {
    renderLogin(req, res) {
        res.render('login', { erro: null, sucesso: null });
    },

    renderCadastro(req, res) {
        res.render('cadastro', { erro: null });
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await usuarioDAO.autenticar(email, senha);

            if (!usuario) {
                return res.render('login', { erro: 'E-mail ou senha incorretos!', sucesso: null });
            }

            req.session.usuario = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil
            };

            res.redirect('/');
        } catch (erro) {
            console.error('Erro no login:', erro);
            res.status(500).send('Erro interno do servidor');
        }
    },

    async cadastrar(req, res) {
        try {
            const { nome, email, senha, perfil } = req.body;
            const usuarioExistente = await usuarioDAO.buscarPorEmail(email);

            if (usuarioExistente) {
                return res.render('cadastro', { erro: 'E-mail já cadastrado!' });
            }

            await usuarioDAO.cadastrar(nome, email, senha, perfil);
            res.render('login', { erro: null, sucesso: 'Conta criada com sucesso! Faça login.' });
        } catch (erro) {
            console.error('Erro no cadastro:', erro);
            res.render('cadastro', { erro: 'Erro ao criar conta.' });
        }
    },

    logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
};