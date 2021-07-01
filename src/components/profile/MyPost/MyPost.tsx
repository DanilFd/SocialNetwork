import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {PostsData} from "../../../types/posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';


type Props = {
    posts: PostsData[]
    newPostText: string
    dispatch: any
}


export const MyPost = (props: Props) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement}
                          onChange={event => props.dispatch(updateNewPostTextActionCreator(event.target.value))}
                          value={props.newPostText}/>

                <div>
                    <button onClick={() => props.dispatch(addPostActionCreator())}>Add post</button>
                </div>
            </div>
            <div className="p-lg-0">
                {props.posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

