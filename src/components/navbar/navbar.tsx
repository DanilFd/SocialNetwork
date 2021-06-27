import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav style={{background: "#332F2C"}}>
            <ul style={{padding: 30}} className="nav flex-column nav-pills nav-fill">
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/messages">Messages</NavLink>

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

