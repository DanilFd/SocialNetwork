import React from 'react';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {PostsData} from "../../types/posts";
import {addPost, ProfilePostData, updateNewPostText} from '../../redux/state';

type Props = {
    profilePostData: ProfilePostData
}

export const Profile = (props: Props) => {
    return (
        <div style={{color: "white"}}>
            <ProfileInfo/>
            <MyPost posts={props.profilePostData.postsData} newPostText={props.profilePostData.newPostText}
                    updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    );
};

