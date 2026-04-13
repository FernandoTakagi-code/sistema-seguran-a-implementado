import { IUserRequest } from "../../interface/IUserRequest";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositores/UsersRepositories";
import { getCustomRepository } from "typeorm";

class CreateUserService {
  async execute({ name, email, admin = false, password,profile }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!password) {
      throw new Error("Password incorrect");
    }
    const passwordHash = await hash(password, 8);

    const usersRepository = getCustomRepository(UsersRepositories);
    const user = usersRepository.create(
      {
        name,
        email,
        admin,
        password: passwordHash,
        profile:{
          id:profile.id
        }
      });
      await usersRepository.save(user);  
      return user;
  }
}
export { CreateUserService };
