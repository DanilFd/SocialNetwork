import {api} from "../../api/apiInstance";
import {actions} from "../authReducer";
import {Auth, AuthData} from "../../types/types";
import {getProfile} from "../../api/profile";
import {RootState} from "../store";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
import {LoginRequest, postLogin} from "../../api/auth";

export const getAuthThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        dispatch(actions.setIsLoading(true))
        api.get<Auth>("/auth/me")
            .then(res => res.data.resultCode === 0 ? res.data.data as AuthData : null)
            .then(a => {
                if (a) {
                    dispatch(actions.setUserData(a))
                    getProfile(a.id).then(p => {
                        dispatch(actions.setUserPhoto(p.photos.small || "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"))
                    })
                }
            })
            .finally(() => dispatch(actions.setIsLoading(false)))
    }
}
export const postLoginThunk = (loginRequest: LoginRequest): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) =>
        postLogin(loginRequest)
            .then(() => dispatch(getAuthThunk()))
            .catch(() => alert("User unfound"))
}