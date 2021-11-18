const { User } = require("../models");

const AuthController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await Usuario.findOne({ where: { email: email } });
      const hash = user.senha;
      if (!user || !crypto.validate(senha, hash)) {
        return res.render("auth/login", {
          page: "Login",
          error: "Usuário ou Senha inválidos por favor tente novamente",
        });
      }
      req.session.user = {
        nome: user.nome,
        sobrenome: user.sobrenome,
      };
      if (user.tipo_usuario == 1) {
        req.session.user.admin = true;
        return res.redirect("/admin");
      } else {
        user.admin = false;
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
};
module.exports = AuthController;
