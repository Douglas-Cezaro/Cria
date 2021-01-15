import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import GenToken from "../config/generateToken";
import { Resolver } from "dns";

const bcrypt = require("bcryptjs");

class UsuarioController {
  public async find(req: Request, res: Response) {
    try {
      const usuarios = await getRepository(UserEntity).find();
      res.send(usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      let user = req.body;

      // Valida se o Usuario, E-mail já existe
      const userExists = await getRepository(UserEntity).findOne({
        where: [{ username: user.username }],
      });
      if (userExists) {
        return res
          .status(500)
          .send({ error: "Usuário já está em utilização!" });
      }

      const emailExists = await getRepository(UserEntity).findOne({
        where: [{ email: user.email }],
      });
      if (emailExists) {
        return res.status(500).send({ error: "E-mail já está em utilização!" });
      }
      //Fim Validação

      // criptografar senha antes mesmo de inserir ao banco
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password, salt);

      // incrementa valores desnecessários Não obrigatórios no cadastro de usuário.
      user.resetToken = "";
      user.dataReset = new Date();

      // Salva Usuario
      await getRepository(UserEntity).save(user);

      const token = GenToken.generatorToken({ id: user.id });

      return res.send({ user, token });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async findById(req: Request, res: Response) {
    const id = req.params.id;

    try {
      //Busca registro pelo ID
      const usuario = await getRepository(UserEntity).findOne(id);

      //Se não encontrar, devolve erro 404
      if (!usuario) {
        res.status(404).send({ error: "Usuário não encontrado" });
        return;
      }

      res.send(usuario);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async update(req: Request, res: Response) {
    const id = req.params.id;
    const novo = req.body;

    try {
      //Busca registro pelo ID
      const usuario = await getRepository(UserEntity).findOne(id);

      //Se não encontrar, devolve erro 404
      if (!usuario) {
        res.status(404).send({ error: "Usuário não encontrado" });
        return;
      }

      // Não atualiza senha nesse metodo!
      delete novo["password"];

      await getRepository(UserEntity).update(usuario.id, novo);

      //Atualiza ID do novo
      novo.id = usuario.id;

      res.send(novo);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async delete(req: Request, res: Response) {
    const id = req.params.id;

    try {
      //Busca registro pelo ID
      const usuario = await getRepository(UserEntity).findOne(id);

      //Se não encontrar, devolve erro 404
      if (!usuario) {
        res.status(404).send({ error: "Usuário não encontrado!" });
        return;
      }

      await getRepository(UserEntity).delete(usuario);

      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new UsuarioController();
