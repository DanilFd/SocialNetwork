import {api} from "./apiInstance"
import {Auth, AuthData} from "../types/types";

type LoginResponse = {
    resultCode: 0
    messages: string[]
    data: {
        userId: number
    }
}
export type LoginRequest = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export const getAuth = () => api.get<Auth>("/auth/me")
    .then(res => {
        return res.data.resultCode === 0 ? res.data.data as AuthData : null

    })

export const postLogin = (LoginRequest: LoginRequest) => api.post<LoginResponse>("/auth/login", LoginRequest)
    .then(res => {
            if (res.data.resultCode === 0) {
                return res.data.data.userId
            }
            throw new Error()
        }
    )
export const deleteLogin = () => api.delete<LoginResponse>("/auth/login")
    .then(res => res.data.resultCode === 0 && res.data.data)
