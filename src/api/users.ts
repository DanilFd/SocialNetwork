import {User} from "../types/types";
import {api} from "./apiInstance";


type UserData = {
    items: User[]
    totalCount: number
}

export const getUsers = (currentPage: number) => api.get<UserData>(`/users?page=${currentPage}&count=8`)
    .then(res => res.data)


