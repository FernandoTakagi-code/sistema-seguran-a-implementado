import { IProfileRequest } from "./IProfileRequest";

interface IUserRequest {
    id?: string;
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    profile:IProfileRequest
  }

  export {IUserRequest}