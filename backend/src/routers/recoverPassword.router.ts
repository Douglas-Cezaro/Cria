import { Router } from "express";
import recuperaSenhaController from "../controller/recoverPassword.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post("/", recuperaSenhaController.solicitaRecuperacao);
    this.router.post("/validkey", recuperaSenhaController.ValidaChave);
    this.router.post("/newpassword", recuperaSenhaController.novaSenha);
  }
}

export default new Routes().router;
