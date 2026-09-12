module.exports = {
    autenticado(req, res, next) {
        if (req.session && req.session.usuario) {
            return next();
        }
        res.redirect('/login');
    },

    apenasAdmin(req, res, next) {
        if (req.session && req.session.usuario && req.session.usuario.perfil === 'admin') {
            return next();
        }
        res.status(403).send('Acesso Negado: Apenas administradores podem realizar esta alteração.');
    }
};