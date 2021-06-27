import React, {useRef} from 'react';
import {User} from "./users/user";
import {Message} from "./messages/message";
import {MessagesData, UsersData} from "../../types/posts";


type Props = {
    users: UsersData[]
    message: MessagesData[]
}
export const Dialogs = (props: Props) => {
    const newMessage = useRef<HTMLTextAreaElement>(null)
    return (
        <div style={{color: "white"}} className="row">
            <div className="col-3 ">
                {props.users.map(user => <User name={user.name} key={user.id} id={user.id}/>)}
            </div>
            <div className="col-9">
                {props.message.map((message, i) => <Message key={i} message={message.message}/>)}
            </div>
            <div className="m-lg-auto">
                <textarea ref={newMessage}/>
            </div>
            <div>
                <button className="btn btn-dark" onClick={() => alert(newMessage.current?.value)}>Send</button>
            </div>
        </div>
    );
};

