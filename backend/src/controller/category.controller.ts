import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CategoryEntity } from "../entity/category.entity";

class CategoryController {

    public async find(req: Request, res: Response) {
        try {
            const categorys = await getRepository(CategoryEntity).find();
            res.send(categorys);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            let category = req.body;
            await getRepository(CategoryEntity).save(category);
            res.send(category);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;
        try {
            //Busca registro pelo ID
            const category = await getRepository(CategoryEntity).findOne(id);

            //caso não encontrar, devolve erro 404
            if (!category) {
                res.status(404).send({ error: "Categoria não encontrada" });
                return;
            }

            res.send(category);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const category = await getRepository(CategoryEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!category) {
                res.status(404).send({ error: "Categoria não encontrada" });
                return;
            }

            await getRepository(CategoryEntity).delete(category);

            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new CategoryController();