import axios from "axios"

const BaseAPI = () => {

    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL as string,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJibHVlc3Rvcm0tYXBpIiwiZXhwIjoxNjkzMjU3Nzg5LCJpYXQiOjE2OTMxNzEzODl9.wkl4ksqJNy3gl4we7MjKedpPa6u5doEoWSTRRAM1phs`
        }
    })
    return api
}

export { BaseAPI }