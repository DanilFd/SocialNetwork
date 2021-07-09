import {InferValueTypes} from "./store";

const initialState = {
    usersData: [{
        name: "Hasbik", id: 0
    }],
    messagesData: [
        {message: "overflow auto-1"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"},
        {message: "overflow auto"}
    ],
    newMessageText: ""
}

export const actions = {
    addMessage: () => ({type: "ADD_MESSAGE"} as const),
    updateNewMessageText: (newText: string) => ({type: "UPDATE_NEW_TEXT_MESSAGE", newText: newText} as const)
}
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage = {
                message: state.newMessageText
            }
            if (state.newMessageText === "") {
                alert("Пусто пусто")
                return state
            }
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ""}
        case "UPDATE_NEW_TEXT_MESSAGE":
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
}