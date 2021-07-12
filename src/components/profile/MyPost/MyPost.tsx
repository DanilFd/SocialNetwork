import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {actions} from '../../../redux/profileReducer';
import {useDispatch} from "react-redux";
import {PostsData} from "../../../types/types";

type Props = {
    postsData: PostsData[],
    newPostText: string
}

export const MyPost = (props: Props) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const dispatch = useDispatch()
    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement}
                          onChange={event => dispatch(actions.updateNewPost(event.target.value))}
                          value={props.newPostText}/>
                <div>
                    <button onClick={() => dispatch(actions.addPost())}>Add post</button>
                </div>
            </div>
            <div className="p-lg-0">
                {props.postsData.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

