import {AuthData} from "../types/types";
import {InferValueTypes} from "./store";


const initialState = {
    userData: null as null | AuthData,
    userPhotoUrl: null as null | string,
    isLoading: true
}

export const actions = {
    setUserData: (userData: AuthData) => ({type: "SET_USER_DATA", userData} as const),
    setUserPhoto: (userPhotoUrl: string) => ({type: "SET_USER_PHOTO", userPhotoUrl} as const),
    setIsLoading: (isLoading: boolean) => ({type: "SET_IS_LOADING", isLoading} as const)
}
type InitialState = typeof initialState
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export const authReducer = (state = initialState, action: ActionTypes): InitialState => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, userData: action.userData}
        case "SET_USER_PHOTO":
            return {...state, userPhotoUrl: action.userPhotoUrl}
        case "SET_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}