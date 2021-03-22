import { User } from "./user";
import { ResponseModel } from "./responseModel";

export interface UserResponseModel extends ResponseModel{
    data:User[]
}