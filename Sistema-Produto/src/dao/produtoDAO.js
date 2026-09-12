const db = require('./conexao');

class ProdutoDAO {
    async listar() {
        const [linhas] = await db.query('SELECT * FROM produtos');
        return linhas;
    }

    async buscarPorId(id) {
        const [linhas] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
        return linhas[0];
    }

    async salvar(produto) {
        const sql = 'INSERT INTO produtos (nome, preco, quantidade, descricao) VALUES (?, ?, ?, ?)';
        await db.query(sql, [produto.nome, produto.preco, produto.quantidade, produto.descricao]);
    }

    async atualizar(id, produto) {
        const sql = 'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, descricao = ? WHERE id = ?';
        await db.query(sql, [produto.nome, produto.preco, produto.quantidade, produto.descricao, id]);
    }

    async deletar(id) {
        await db.query('DELETE FROM produtos WHERE id = ?', [id]);
    }
}

module.exports = new ProdutoDAO();