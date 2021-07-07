import React from 'react';

type Posts = {
    message: string
    likesCount: number
}
export const Post = (props: Posts) => {
    return (
        <div>
            <img style={{width: 50, borderRadius: 40}}
                 src="https://vraki.net/sites/default/files/inline/images/30_55.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};
