import { Router } from "express";
import validToken from "../middlewares/auth.middlewares";
import establishmentsController from "../controller/establishments.controller";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get(
      "/",
      /*[validToken.authMiddlewares], */ establishmentsController.find
    );
    this.router.post("/", establishmentsController.create);
    this.router.get(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      establishmentsController.findById
    );
    this.router.put(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      establishmentsController.update
    );
    this.router.delete(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      establishmentsController.delete
    );
  }
}

export default new Routes().router;
