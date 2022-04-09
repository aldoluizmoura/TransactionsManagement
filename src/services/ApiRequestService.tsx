import axios from "axios"

export const requestApi = axios.create({
    baseURL : 'https://localhost:7103/api/Transactions/',
})