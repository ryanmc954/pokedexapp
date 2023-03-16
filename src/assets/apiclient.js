import axios from "axios"

const client = axios.create({
    baseURL: "http://127.0.01:8000",
    headers: {
        "Content-Type": "application/json",
        //"Authorization"
    },
    withCredentials: true
})

export default client