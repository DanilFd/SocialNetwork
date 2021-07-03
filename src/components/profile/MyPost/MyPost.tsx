import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {actions} from '../../../redux/profileReducer';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../redux";


export const MyPost = () => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const newPostsText = useSelector((state: AppState) => state.profilePage.newPostText)
    const postsData = useSelector((state: AppState) => state.profilePage.postsData)
    const dispatch = useDispatch()
    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement}
                          onChange={event => dispatch(actions.updateNewPost(event.target.value))}
                          value={newPostsText}/>
                <div>
                    <button onClick={() => dispatch(actions.addPost())}>Add post</button>
                </div>
            </div>
            <div className="p-lg-0">
                {postsData.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

