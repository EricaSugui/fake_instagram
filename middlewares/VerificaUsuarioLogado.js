const VerificaUsuarioLogado = (req,res,next) => {
    //se session do usuario nao estiver setada, redirciona para login
    if(!req.session.usuario) {
        res.redirect('/login?error=2');
    }

    // se chegou ate a qui, a session esta ok
    next();

}

module.exports = VerificaUsuarioLogado;