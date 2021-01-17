import { Router } from 'express';
import CurseController from '../controller/curse.controller';
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', /*[validToken.authMiddlewares],*/ CurseController.find);
        this.router.get('/:id([0-9]+)', /*[validToken.authMiddlewares],*/ CurseController.findByIdCategory);
    }
}

export default new Routes().router;