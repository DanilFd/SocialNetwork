import {api} from "../../api/apiInstance";
import {Profile} from "../../types/types";
import {actions} from "../profileReducer";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";
import {getStatus, updateStatus} from "../../api/profile";

export const getProfileThunk = (userId: string | number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        api.get<Profile>(`/profile/${userId}`)
            .then(p => dispatch(actions.setUserProfile(p.data)))
    }
}

export const getStatusThunk = (userId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        getStatus(userId)
            .then(s => dispatch(actions.setStatusProfile(s.data)))
    }
}

export const updateStatusThunk = (status: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        updateStatus(status)
            .then(res => res.data.resultCode === 0 && dispatch(actions.setStatusProfile(status)))
    }
}
