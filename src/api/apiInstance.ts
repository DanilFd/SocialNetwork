import axios from "axios";

export const api = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {"API-KEY": "49c64668-3988-4db3-9d21-adaf9930e260"}
})
