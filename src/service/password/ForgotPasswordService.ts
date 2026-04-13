import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";
import { sign } from "jsonwebtoken";

class ForgotPasswordService {
  async execute(email: string) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
     
      throw new Error("Se o usuário existir, um e-mail foi enviado.");
    }

   
    const token = sign({}, "CHAVE_RECO_SENHA", {
      subject: user.id,
      expiresIn: "15m",
    });

   
    console.log(`Link: http://meusistema.com/reset-password?token=${token}`);
    
    return { message: "E-mail de recuperação enviado." };
  }
}

 export {ForgotPasswordService};