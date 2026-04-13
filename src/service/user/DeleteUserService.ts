import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UsersRepositories";
class DeleteUserService {
  async execute(id:any) {
    if (!id) {
      throw new Error("Id incorrect");
    }
    const usersRepository = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepository.findOne({ 
  where: { id } 
});

    if (!userAlreadyExists) {
        throw new Error("User not exists");
    }

    const ret = await usersRepository.delete(id);
    
    var messagmsgeDelete = {
      message:"Registro excluido com sucesso"
    }
    return messagmsgeDelete;

  }
}
export { DeleteUserService };
