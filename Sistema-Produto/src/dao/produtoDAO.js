const db = require('./conexao');

class ProdutoDAO {
    async listarTodos() {
        const [linhas] = await db.query('SELECT * FROM produtos ORDER BY id DESC');
        return linhas;
    }

    async buscarPorId(id) {
        const [linhas] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
        return linhas[0];
    }

    async salvar(produto) {
        const sql = 'INSERT INTO produtos (nome, preco, quantidade, descricao) VALUES (?, ?, ?, ?)';
        const [resultado] = await db.query(sql, [
            produto.nome,
            parseFloat(produto.preco) || 0.00,
            parseInt(produto.quantidade, 10) || 0,
            produto.descricao || ''
        ]);
        return resultado.insertId;
    }

    async atualizar(id, produto) {
        const sql = 'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, descricao = ? WHERE id = ?';
        await db.query(sql, [
            produto.nome,
            parseFloat(produto.preco) || 0.00,
            parseInt(produto.quantidade, 10) || 0,
            produto.descricao || '',
            id
        ]);
    }

    async deletar(id) {
        await db.query('DELETE FROM produtos WHERE id = ?', [id]);
    }
}

module.exports = new ProdutoDAO();