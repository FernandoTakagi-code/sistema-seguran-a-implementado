import { verify } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";

class ResetPasswordService {
  async execute(token: string, newPassword: string) {
    try {
      
     const { sub } = verify(token, "CHAVE_RECO_SENHA") as { sub: string };
      const userId = sub as string;

      const usersRepository = getCustomRepository(UsersRepositories);
      const user = await usersRepository.findOne({ where: { id: userId } });

      if (!user) throw new Error("Usuário inválido");

     
      const passwordHash = await hash(newPassword, 8);

    
      user.password = passwordHash;
      await usersRepository.save(user);

      return { message: "Senha atualizada com sucesso." };
    }  catch (err) {
   
    throw new Error("Token inválido ou expirado.");
}
  }
}

export {ResetPasswordService}