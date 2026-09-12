const produtoDAO = require('../dao/produtoDAO');

module.exports = {
    async index(req, res) {
        try {
            const produtos = await produtoDAO.listar();
            res.render('index', { 
                produtos, 
                produtoEdicao: null,
                usuario: req.session.usuario 
            });
        } catch (erro) {
            console.error('Erro ao listar produtos:', erro);
            res.status(500).send('Erro no servidor');
        }
    },

    async salvar(req, res) {
        try {
            await produtoDAO.salvar(req.body);
            res.redirect('/');
        } catch (erro) {
            console.error('Erro ao salvar produto:', erro);
            res.status(500).send('Erro ao salvar produto');
        }
    },

    async editar(req, res) {
        try {
            const produtos = await produtoDAO.listar();
            const produtoEdicao = await produtoDAO.buscarPorId(req.params.id);
            res.render('index', { 
                produtos, 
                produtoEdicao,
                usuario: req.session.usuario 
            });
        } catch (erro) {
            console.error('Erro ao buscar produto para edição:', erro);
            res.status(500).send('Erro no servidor');
        }
    },

    async atualizar(req, res) {
        try {
            await produtoDAO.atualizar(req.params.id, req.body);
            res.redirect('/');
        } catch (erro) {
            console.error('Erro ao atualizar produto:', erro);
            res.status(500).send('Erro ao atualizar produto');
        }
    },

    async deletar(req, res) {
        try {
            await produtoDAO.deletar(req.params.id);
            res.redirect('/');
        } catch (erro) {
            console.error('Erro ao excluir produto:', erro);
            res.status(500).send('Erro ao excluir produto');
        }
    }
};