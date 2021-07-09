import axios from "axios";
import {User} from "../types/types";


type UserData = {
    items: User[]
    totalCount: number
}

export const getUsers = (currentPage: number) => axios.get<UserData>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=10`)
    .then(res => res.data)


