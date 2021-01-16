import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CategoryUserEntity } from "../entity/categoryUser.entity";

class CategoryUserController {
  public async find(req: Request, res: Response) {
    try {
      const categorys = await getRepository(CategoryUserEntity)
        .find({ relations: ["user", "categorys"] });
      res.send(categorys);

    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async FindById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const categorys = await getRepository(CategoryUserEntity).
        createQueryBuilder('TESTE')
        // .leftJoinAndSelect("TESTE.user", "users")
        .innerJoinAndSelect("TESTE.categorys", "category")
        .where('userId = :IDUSER')
        .setParameters({ IDUSER: id })
        .getMany();

      res.send(categorys);

    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      let category = req.body;
      await getRepository(CategoryUserEntity).save(category);
      res.send(category);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
        //Busca registro pelo ID
        const category = await getRepository(CategoryUserEntity).findOne(id);

        //Se não encontrar, devolve erro 404
        if (!category) {
          res.status(404).send({ error: "Categoria não encontrada!" });
          return;
        }

        await getRepository(CategoryUserEntity).delete(category);

        res.status(204).send();

    } catch (error) {
        res.status(500).send(error);
    }
}



}

export default new CategoryUserController();