import { Router } from 'express';
import CategoryUserController from '../controller/categoryUser.controller';
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', [validToken.authMiddlewares], CategoryUserController.find);
        this.router.get('/:id([0-9]+)', [validToken.authMiddlewares], CategoryUserController.FindById);
        this.router.post("/", CategoryUserController.create);
        this.router.delete(
            "/:id([0-9]+)",
            [validToken.authMiddlewares],
            CategoryUserController.delete
        );
    }
}

export default new Routes().router;