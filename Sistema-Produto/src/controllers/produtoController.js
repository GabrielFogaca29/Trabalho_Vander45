const produtoDAO = require('../dao/produtoDAO');

module.exports = {
    async index(req, res) {
        try {
            const produtos = await produtoDAO.listarTodos();
            res.render('index', { produtos, produtoEdicao: null });
        } catch (erro) {
            console.error('Erro ao listar produtos:', erro);
            res.status(500).send('Erro no servidor ao carregar produtos');
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
            const produtos = await produtoDAO.listarTodos();
            const produtoEdicao = await produtoDAO.buscarPorId(req.params.id);
            res.render('index', { produtos, produtoEdicao });
        } catch (erro) {
            console.error('Erro ao buscar produto para edição:', erro);
            res.status(500).send('Erro no servidor ao buscar produto');
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