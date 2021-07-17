import React from 'react';
import {NavLink} from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Navbar = () => {
    const {userData} = useTypedSelector(state => state.auth)
    return (
        <nav className="position-fixed" style={{background: "#332F2C"}}>
            <ul style={{padding: 30}} className="nav flex-column nav-pills nav-fill">
                <li className="nav-item ">
                    <NavLink className="nav-link" to={`profile/${userData?.id}`}>My profile</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/messages">Messages</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/news">News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/music">Music</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/settings">Settings</NavLink>

                </li>
            </ul>
        </nav>
    );
};

