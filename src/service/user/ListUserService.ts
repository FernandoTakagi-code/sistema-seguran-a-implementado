
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";

class ListUserService {
    async execute() {
      const usersRepositories = getCustomRepository(UsersRepositories);
      const users = await usersRepositories
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.profile","profile").getMany();
      return  users;
    }
  
    async findById(id) {
      const usersRepositories = getCustomRepository(UsersRepositories);
      const users = await usersRepositories.findOne({where: { id } });
      return  users;
  
    }
  }
  export { ListUserService };
  