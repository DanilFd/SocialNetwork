import {InferValueTypes} from "./store";
import {PostsData, Profile} from "../types/types";

const initialState = {
    postsData: [] as PostsData[],
    newPostText: "",
    profile: null as null | Profile,
    status: ""
}
export const actions = {
    addPost: () => ({type: "ADD_POST"} as const),
    updateNewPost: (text: string) => ({type: "UPDATE_NEW_POST_TEXT", newText: text} as const),
    setUserProfile: (profile: Profile) => ({type: "SET_USER_PROFILE", profile: profile} as const),
    setStatusProfile: (status: string) => ({type: "SET_STATUS_PROFILE", status} as const)


}
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
export const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                message: state.newPostText,
                likesCount: 0
            }
            if (state.newPostText === "") {
                alert("Пусто Пусто")
                return state
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ""}
        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostText: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS_PROFILE":
            return {...state, status: action.status}
        default:
            return state
    }
}