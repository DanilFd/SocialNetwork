import React, {useEffect, useState} from 'react';
import {User} from './user/user';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/usersReducer";
import {getUsers} from "../../api/users";
import {createPages} from "../../utils/pagesCreator";

export const Users = () => {
    const {users, totalUsersCount, currentPage} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalUsersCount / 10)
    const pages: number[] = []
    createPages(pages, pagesCount, currentPage)
    const [pageNumberText, setPageNumberText] = useState("")
    useEffect(() => {
        getUsers(currentPage).then((u) => {
            dispatch(actions.setUsers(u.items))
            dispatch(actions.setTotalUsersCount(u.totalCount))
        })
    }, [dispatch, currentPage])
    return (
        <div>
            <h3 className="h3 p-1 text-primary">Users:</h3>
            <div className="d-flex flex-wrap">
                {users.map(u => <User key={u.id} user={u}/>)}
            </div>
            <div className="btn-toolbar mb-3 justify-content-center pt-4" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                    {pages.map((p, i) => <button key={i} onClick={() => dispatch(actions.setCurrentPage(p))}
                                                 className={`m-lg-1 p-2 ${currentPage === p ? "active btn-primary" : "btn-dark"}`}>{p}</button>)}
                </div>
                <form className="input-group" onSubmit={e => e.preventDefault()}>
                    <input style={{maxWidth: 60}} type="text" className="form-control bg-white text-dark "
                           aria-label="Input group example" aria-describedby="btnGroupAddon2"
                           onChange={e => setPageNumberText(e.target.value)} value={pageNumberText}/>
                    <button onClick={() => {
                        dispatch(actions.setCurrentPage(+pageNumberText))
                        setPageNumberText("")
                    }} className="input-group-text bg-primary border-dark btn-outline-dark" id="btnGroupAddon2">🔍
                    </button>
                </form>
            </div>
        </div>
    );
};

