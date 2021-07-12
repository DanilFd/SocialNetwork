import {api} from "./apiInstance"
import {Auth, AuthData} from "../types/types";

export const getAuth = () => api.get<Auth>("/auth/me").then(res => {
    return res.data.resultCode === 0 ? res.data.data as AuthData : null
})
