import React, {useRef} from 'react';
import {User} from "./users/user";
import {Message} from "./messages/message";
import {
    addMessageActionCreator,
    DialogsPage,
    updateNewMessageTextActionCreator
} from '../../redux/state';


type Props = {
    dialogsPage: DialogsPage
    dispatch: any
    newMessageText: string
}
export const Dialogs = (props: Props) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    return (
        <div style={{color: "white"}} className="row">
            <div className="col-3 ">
                {props.dialogsPage.usersData.map(user => <User name={user.name} key={user.id} id={user.id}/>)}
            </div>
            <div className="col-9">
                {props.dialogsPage.messagesData.map((message, i) => <Message key={i} message={message.message}/>)}
            </div>
            <div className="m-lg-auto">
                <textarea ref={newMessageElement}
                          onChange={event => props.dispatch(updateNewMessageTextActionCreator(event.target.value))}
                          value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={() => props.dispatch(addMessageActionCreator())} className="btn btn-dark">Send</button>
            </div>
        </div>
    );
};

