import { ILogin, LoginResponse } from "../interface/LoginInterface"
import { BaseAPI } from "./baseAPI"


export class LoginService {
    static async login(data: ILogin): Promise<LoginResponse> {
        return await BaseAPI()
            .post("/login", data)
            .then(({ data }) => data)
            .catch((error) => error)
    }
}
