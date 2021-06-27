import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {PostsData} from "../../../types/posts";


type Props = {
    posts: PostsData[]
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export const MyPost = (props: Props) => {
    debugger
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement} onChange={event => props.updateNewPostText(event.target.value)}
                          value={props.newPostText}/>
                <div>
                    <button onClick={() => props.addPost(newPostElement.current?.value || '')}>Add post</button>
                </div>
            </div>
            <div className="p-lg-0">
                {props.posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

