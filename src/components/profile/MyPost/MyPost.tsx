import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {actions} from '../../../redux/profileReducer';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


export const MyPost = () => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const {newPostText, postsData} = useTypedSelector(state => state.profilePage)
    const dispatch = useDispatch()
    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement}
                          onChange={event => dispatch(actions.updateNewPost(event.target.value))}
                          value={newPostText}/>
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

