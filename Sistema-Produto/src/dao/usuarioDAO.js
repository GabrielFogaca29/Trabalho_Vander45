const bcrypt = require('bcrypt');
const db = require('./conexao');

class UsuarioDAO {
    async cadastrar(nome, email, senha, perfil = 'comum') {
        const hashSenha = await bcrypt.hash(senha, 10);
        const sql = 'INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?)';
        await db.query(sql, [nome, email, hashSenha, perfil]);
    }

    async buscarPorEmail(email) {
        const [linhas] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return linhas[0];
    }

    async autenticar(email, senha) {
        const usuario = await this.buscarPorEmail(email);
        if (!usuario) return null;

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        return senhaValida ? usuario : null;
    }
}

module.exports = new UsuarioDAO();