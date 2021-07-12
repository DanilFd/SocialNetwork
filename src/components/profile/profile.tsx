import React, {useEffect} from 'react';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {getProfile} from "../../api/profile";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/profileReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from 'react-router-dom';

type Params = {
    userId: string
}

export const Profile = () => {
    const params = useParams<Params>()
    const {profile, newPostText, postsData} = useTypedSelector(state => state.profilePage)
    const dispatch = useDispatch()
    useEffect(() => {
        getProfile(params.userId).then(p => {
            dispatch(actions.setUserProfile(p))
        })
    }, [dispatch, params.userId])
    return (
        <div style={{color: "white"}}>
            <ProfileInfo profile={profile}/>
            <MyPost newPostText={newPostText} postsData={postsData}/>
        </div>
    );
};

