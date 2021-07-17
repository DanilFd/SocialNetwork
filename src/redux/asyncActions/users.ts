import {api} from "../../api/apiInstance";
import {User} from "../../types/types";
import {actions} from "../usersReducer";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

type UserData = {
    items: User[]
    totalCount: number
}

export const getUsersThunk = (currentPage: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        api.get<UserData>(`/users?page=${currentPage}&count=8`)
            .then(u => {
                dispatch(actions.setUsers(u.data.items))
                dispatch(actions.setTotalUsersCount(u.data.totalCount))
                dispatch(actions.toggleIsFetching(false))
            })
    }
}