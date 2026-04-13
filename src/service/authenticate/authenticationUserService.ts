import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../../interface/IAuthenticateRequest";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({ where: { email } });
    if(!user){
        throw new Error("Email incorreto");
    }
    const passwordMatch = await compare(password, user?.password);
    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }
  
    const token = sign(
      { email: email,},
      "UMC-EngSoftware-2024",
      {
        subject: ("others"), expiresIn: "1d",
      }
    );
    return token;
  }
}
export { AuthenticateUserService };