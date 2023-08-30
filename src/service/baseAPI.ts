import { formatErrors, Errors } from "@helpers/formatService"
import { getToken } from "@helpers/getToken"
import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": `Bearer ${getToken()}`,
    }
})

api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error: Errors) => {
        if (error.response.status === 401 || error.response.data.message.includes("token")) {
            window.location.href = '/'
            localStorage.clear()
        }

        return Promise.reject(formatErrors(error))
    }
)

api.interceptors.request.use(async (response: any) => {
    response.headers.Authorization = `Bearer ${getToken()}`;
    return response;
});

export { api }