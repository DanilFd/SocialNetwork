import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

//Автоматическая тпизация actions
export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>