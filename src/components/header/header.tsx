import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getAuthThunk} from '../../redux/asyncActions/auth';

export const Header = () => {
    const {userData, userPhotoUrl} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthThunk())
    }, [dispatch])
    return (
        <header className="sticky-top d-flex justify-content-between" style={{backgroundColor: "#332F2C"}}>
            <img style={{width: 100, marginLeft: 80}}
                 src="https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png" alt=""/>
            {!userData ?
                <NavLink className="pe-5 d-flex align-items-center text-decoration-none" to="/login">login </NavLink> :
                <div className="d-flex justify-content-around align-items-center">
                    <img style={{width: 35, height: 35, borderRadius: "50%", marginRight: 25}} src={userPhotoUrl || ""}
                         alt=""/>
                    <span className="pe-5 d-flex align-items-center text-white">{userData.login}</span>
                </div>
            }
        </header>
    );
};

