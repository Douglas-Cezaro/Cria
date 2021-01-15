import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { UserEntity } from "../entity/user.entity";

import mail from "../config/mail/email";

const bcrypt = require("bcryptjs");

class recoverPasswordController {
  public async solicitaRecuperacao(req: Request, res: Response) {
    try {
      const email = req.body.email;

      const user = await getRepository(UserEntity).findOne({
        where: [
          {
            email: email,
          },
        ],
      });

      if (!user) {
        res.status(400).send({ error: "E-mail não encontrado!" });
      }

      // criptografa token
      const salt = bcrypt.genSaltSync(10);
      const TokenReset = bcrypt.hashSync(String(Math.random()), salt);

      // Carrega data Solictação.
      var DataReset = new Date();
      DataReset.setHours(DataReset.getHours() + 1);

      // =Insere insere parmatros Banco de Dados!
      await getConnection()
        .createQueryBuilder()
        .update(UserEntity)
        .set({
          resetToken: TokenReset,
          dataReset: DataReset,
        })
        .where("id = :id", { id: user.id })
        .execute();
      // Fim

      try {
        mail.sendMail(
          user.email,
          "Esse é seu código de recuperação de Senha : " + TokenReset
        );
      } catch (error) {
        res.status(500).send(error);
      }

      res.send({ sucess: "Verifique sua caixa de e-mail." });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async ValidaChave(req: Request, res: Response) {
    try {
      const { email, token } = req.body;

      const user = await getRepository(UserEntity).findOne({
        where: [
          {
            email: email,
          },
        ],
      });

      if (!user) {
        return res.status(400).send({ error: "E-mail não é valido!" });
      }

      // Valida se o token é valido
      if (String(token) != String(user.resetToken)) {
        return res
          .status(500)
          .send({ error: "Código de recuperção invalido!" });
      }

      //valida se o token ainda é valido
      if (user.dataReset <= new Date()) {
        return res
          .status(500)
          .send({ error: "O código de recuperação expirou!" });
      }

      return res.status(200).send({ sucess: "código válido" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async novaSenha(req: Request, res: Response) {
    try {
      const { email, token, NewPassword } = req.body;

      const user = await getRepository(UserEntity).findOne({
        where: [
          {
            email: email,
          },
        ],
      });

      if (!user) {
        return res.status(400).send({ error: "E-mail não é valido!" });
      }

      // Valida se o token é valido
      if (token != user.resetToken) {
        return res
          .status(500)
          .send({ error: "Código de recuperção invalido!" });
      }

      //valida se o token ainda é valido
      if (user.dataReset <= new Date()) {
        return res
          .status(500)
          .send({ error: "O código de recuperação expirou!" });
      }

      // criptografar senha antes mesmo de inserir ao banco
      const salt = bcrypt.genSaltSync(10);

      // atualiza nova senha e limpa o hash de Token, para que o usúario não utilize esse token mais!
      try {
        await getConnection()
          .createQueryBuilder()
          .update(UserEntity)
          .set({
            password: String(bcrypt.hashSync(NewPassword, salt)),
            resetToken: "",
          })
          .where("id = :id", { id: user.id })
          .execute();
        // Fim
      } catch (error) {
        res.status(500).send({ error: "Erro ao atualizar a nova senha!" });
      }

      res.send({ sucess: "Senha alterada com sucesso!" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new recoverPasswordController();
