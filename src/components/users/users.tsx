import React, {useEffect} from 'react';
import {User} from './user/user';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/usersReducer";
import {createPages} from "../../utils/pagesCreator";
import {Loader} from "../shared/loader";
import {getUsersThunk} from '../../redux/asyncActions/users';
import {WithLoginRedirect} from "../../hoc/withLoginRedirect";

const RawUsers = () => {
    const {users, totalUsersCount, currentPage, isFetching} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalUsersCount / 10)
    const pages: number[] = []
    createPages(pages, pagesCount, currentPage)
    useEffect(() => {
        dispatch(getUsersThunk(currentPage))
    }, [dispatch, currentPage])
    return (
        <>
            <div>
                <h3 className="h3 p-1 text-primary">Users:</h3>
                <div className="d-flex flex-wrap justify-content-center align-items-center" style={{minHeight: "70vh"}}>
                    {isFetching && <Loader/>}
                    {!isFetching && users.map(u => <User key={u.id} user={u}/>)}
                </div>
                <div className="btn-toolbar mb-3 justify-content-center pt-4" role="toolbar"
                     aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button onClick={() => dispatch(actions.setCurrentPage(1))}
                                className="btn-group me-2 m-lg-1 p-2 btn-primary" role="group">❮❮
                        </button>
                        {pages.map((p, i) => <button key={i} onClick={() => dispatch(actions.setCurrentPage(p))}
                                                     className={`m-lg-1 p-2 ${currentPage === p ? "active btn-primary" : "btn-dark"}`}>{p}</button>)}
                        <button onClick={() => dispatch(actions.setCurrentPage(pagesCount))}
                                className="btn-group me-2 m-lg-1 p-2 btn-primary" role="group">❯❯
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};
export const Users = () => <WithLoginRedirect>
    <RawUsers/>
</WithLoginRedirect>

