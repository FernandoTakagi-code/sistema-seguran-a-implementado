import { Request, Response } from "express";
import { ListUserService } from "../../src/service/user/ListUserService";
class ListUserController {
    async handle(request: Request, response: Response) {    
      const listuserService= new ListUserService()
    const ret= await listuserService.execute()
    return response.json(ret);
    }
    async findById(request: Request, response: Response) {
      const id= request.params.id;
      const listuserService= new ListUserService()
      const ret= await listuserService.findById(id)
      return response.json(ret);
  
    }
  } 
  export { ListUserController };