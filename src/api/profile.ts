import {Profile} from "../types/types";
import {api} from "./apiInstance";

export const getProfile = (userId: string | number) => api
    .get<Profile>(`/profile/${userId}`)
    .then(res => res.data)

export const getStatus = (userId: number) => api
    .get(`profile/status/${userId}`)

export const updateStatus = (status: string) => api
    .put(`profile/status`, {status: status})
