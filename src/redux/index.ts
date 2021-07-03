import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

//Автоматическая тпизация actions
export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>