import React from 'react';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./profileInfo/profileInfo";

export const Profile = () => {
    return (
        <div style={{color: "white"}}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
};

