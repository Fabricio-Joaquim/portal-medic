import { ILogin, LoginResponse } from "../interface/LoginInterface"
import { BaseAPI } from "./baseAPI"


export class LoginService {
static async login(data: ILogin):Promise<LoginResponse> {
        const response = await BaseAPI().post("/login", data)
        return response.data
    }
}
