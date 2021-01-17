import { Console } from "console";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { CurseEntity } from "../entity/curse.entity";

class CurseController {
    public async find(req: Request, res: Response) {
        try {
            const curses = await getRepository(CurseEntity).find();
            res.send(curses);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async findByIdCategory(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const categorys = await getRepository(CurseEntity).
                createQueryBuilder('TESTE')
                // .leftJoinAndSelect("TESTE.user", "users")
                //.innerJoinAndSelect("TESTE.category", "category")
                .where('categoryId = :categoryId')
                .setParameters({ categoryId: id })
                .getMany();

            res.send(categorys);

        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new CurseController();