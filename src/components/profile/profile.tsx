import React, {useEffect} from 'react';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from 'react-router-dom';
import {getProfileThunk} from '../../redux/asyncActions/profile';
import {WithLoginRedirect} from "../../hoc/withLoginRedirect";

type Params = {
    userId: string
}

const RawProfile = () => {
    const params = useParams<Params>()
    const {profile, newPostText, postsData, status} = useTypedSelector(state => state.profilePage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk(params.userId))
    }, [dispatch, params.userId])
    return (
        <div style={{color: "white"}}>
            <ProfileInfo status={status} profile={profile}/>
            <MyPost newPostText={newPostText} postsData={postsData}/>
        </div>
    );
};

export const Profile = () => <WithLoginRedirect>
    <RawProfile/>
</WithLoginRedirect>

