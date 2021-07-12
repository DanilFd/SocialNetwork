import {Profile} from "../types/types";
import {api} from "./apiInstance";

export const getProfile = (userId: string | number) => api
    .get<Profile>(`/profile/${userId}`)
    .then(res => res.data)


