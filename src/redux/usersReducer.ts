import {InferValueTypes} from "./store";


const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: "Hasbik K.",
            status: "Cola,Pizza,Burgir",
            location: {
                city: "Chechnya",
                country: "Russia"
            }
        },
        {
            id: 2,
            followed: false,
            fullName: "Shaman T.",
            status: "That's incredible",
            location: {
                city: "Oblivion",
                country: "Hearthstone'"
            }
        },
        {
            id: 3,
            followed: false,
            fullName: "Druid S.",
            status: "Let's celebrate and suck some dick",
            location: {
                city: "Oblivion",
                country: "Hearthstone"
            }
        }
    ]
}
export type Users = typeof initialState.users
export const actions = {
    toggleFollow: (userId: number) => ({type: "TOGGLE_FOLLOW", userId} as const),
    setUsers: (users: Users) => ({type: "SET_USERS", users} as const)
}
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: !u.followed} : u
                })
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}