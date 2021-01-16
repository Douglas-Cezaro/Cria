import { Router } from "express";
import userController from "../controller/user.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/", [validToken.authMiddlewares], userController.find);
    this.router.post("/", userController.create);
    this.router.get(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      userController.findById
    );
    this.router.put(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      userController.update
    );
    this.router.delete(
      "/:id([0-9]+)",
      [validToken.authMiddlewares],
      userController.delete
    );
    this.router.get(
      "/searchSchoolCode",
      userController.searchSchoolCode
    );
  }
}

export default new Routes().router;
