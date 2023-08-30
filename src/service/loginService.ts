import { ILogin, LoginResponse } from "../interface/LoginInterface"
import { api } from "./baseAPI"


export class LoginService {
    static async login(data: ILogin): Promise<LoginResponse> {
        return await api
            .post("/login", data)
            .then(({ data }) => data)
            .catch((error) => error)
    }
}
