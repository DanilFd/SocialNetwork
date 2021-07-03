import {InferValueTypes} from "./index";

const initialState = {
    postsData: [
        {message: "", likesCount: 0}
    ],
    newPostText: ""
}
export const actions = {
    addPost: () => ({type: "ADD_POST"} as const),
    updateNewPost: (text: string) => ({type: "UPDATE_NEW_POST_TEXT", newText: text} as const)

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
        default:
            return state
    }
}