import {api} from "../../api/apiInstance";
import {actions} from "../usersReducer";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

type FollowResponse = {
    resultCode: number,
    messages: string[]
    data: {}
}

export const sendFollowThunk = (userId: number, setFollowingInProgress: (flag: boolean) => void):
    ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        setFollowingInProgress(true)
        api.post<FollowResponse>(`/follow/${userId}`)
            .then(res => res.data.resultCode === 0 && dispatch(actions.toggleFollow(userId)))
            .finally(() => setFollowingInProgress(false))
    }
}

export const sendUnfollow = (userId: number, setFollowingInProgress: (flag: boolean) => void) => {
    return (dispatch: any) => {
        setFollowingInProgress(true)
        api.delete<FollowResponse>(`/follow/${userId}`)
            .then(res => res.data.resultCode === 0 && dispatch(actions.toggleFollow(userId)))
            .finally(() => setFollowingInProgress(false))
    }
}