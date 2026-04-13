import { IUserRequest } from "../../interface/IUserRequest";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";
import { ProfileRepositories } from "../../repositores/ProfileRepositories";
import { hash } from "bcryptjs";
  class UpdateUserService {
    async execute({id, name, email, admin = false, password,profile }: IUserRequest) {
        if (!email) {
          throw new Error("Email incorrect");
        }
        if (!password) {
          throw new Error("Password incorrect");
        }
        const passwordHash = await hash(password, 8);
        const usersRepository = getCustomRepository(UsersRepositories);
        const profileRepositories = getCustomRepository(ProfileRepositories);
        const userAlreadyExists = await usersRepository.findOne({
          where: { id } 
        });
        if (!userAlreadyExists) {
            throw new Error("User not exists")      }

      const prof = await profileRepositories.findOne({ 
      where: { id: profile.id } 
      });
      if (password) {
      userAlreadyExists.password = await hash(password, 8);
}
        userAlreadyExists.name=name
        userAlreadyExists.email=email
        userAlreadyExists.admin=admin
        userAlreadyExists.password=passwordHash
        userAlreadyExists.profile=prof
        const user= await usersRepository.update(id,userAlreadyExists)        
        return user
      }
  }
  export { UpdateUserService };