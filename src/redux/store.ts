import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

//Автоматическая тпизация actions
export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>