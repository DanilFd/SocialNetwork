import {User} from "../types/types";
import {InferValueTypes} from "./store";


const initialState = {
    users: [] as User[],
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
export const actions = {
    toggleFollow: (userId: number) => ({type: "TOGGLE_FOLLOW", userId} as const),
    setUsers: (users: User[]) => ({type: "SET_USERS", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
}
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case "SET_USERS":
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}