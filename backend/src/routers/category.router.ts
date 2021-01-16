import { Router } from "express";
import categoryController from "../controller/category.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/", [validToken.authMiddlewares], categoryController.find);
    this.router.post("/", categoryController.create);
    this.router.get(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      categoryController.findById
    );
    this.router.delete(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      categoryController.delete
    );
  }
}

export default new Routes().router;
