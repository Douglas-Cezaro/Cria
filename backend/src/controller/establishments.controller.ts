import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { EstablishmentEntity } from "../entity/establishment.entity";

class EstablishmentsController {

    public async find(req: Request, res: Response) {
        try {
            const Establishments = await getRepository(EstablishmentEntity)
                .find();
            res.send(Establishments);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const Establishment = await getRepository(EstablishmentEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!Establishment) {
                res.status(404).send({ error: "Estabelecimento não encontrado!" });
                return;
            }

            res.send(Establishment);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            let Establishment = req.body;
            await getRepository(EstablishmentEntity).save(Establishment);
            res.send(Establishment);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const Establishment = await getRepository(EstablishmentEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!Establishment) {
                res.status(404).send({ error: "Estabelecimento não encontrado" });
                return;
            }

            // Não atualiza senha nesse metodo!
            delete novo["password"];

            await getRepository(EstablishmentEntity).update(Establishment.id, novo);

            //Atualiza ID do novo
            novo.id = Establishment.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const Establishment = await getRepository(EstablishmentEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!Establishment) {
                res.status(404).send({ error: "Estabelecimento não encontrado!" });
                return;
            }

            await getRepository(EstablishmentEntity).delete(Establishment);

            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new EstablishmentsController();