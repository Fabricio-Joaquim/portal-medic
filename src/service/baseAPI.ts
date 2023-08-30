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
console.log(getToken())
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error: Errors) => {
        console.log(error.response.data.message)
        const errors = formatErrors(error)

        if (error.response.status === 401) {
            window.location.href = '/'
            localStorage.clear()
        }

        return Promise.reject(errors)
    }
)

api.interceptors.request.use(async (response: any) => {
      response.headers.Authorization = `Bearer ${getToken()}`;
    return response;
  });

export { api }