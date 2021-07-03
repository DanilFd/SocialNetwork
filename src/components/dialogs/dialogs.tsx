import React, {useRef} from 'react';
import {User} from "./users/user";
import {Message} from "./messages/message";
import {actions} from '../../redux/dialogsReducer';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux";


export const Dialogs = () => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const newMessageText = useSelector((state: AppState) => state.dialogsPage.newMessageText)
    const messagesData = useSelector((state: AppState) => state.dialogsPage.messagesData)
    const userData = useSelector((state: AppState) => state.dialogsPage.usersData)
    const dispatch = useDispatch()
    return (
        <div style={{color: "white"}} className="row">
            <div className="col-3 ">
                {userData.map(user => <User name={user.name} key={user.id} id={user.id}/>)}
            </div>
            <div className="col-9">
                {messagesData.map((message, i) => <Message key={i} message={message.message}/>)}
            </div>
            <div className="m-lg-auto">
                <textarea ref={newMessageElement}
                          onChange={event => dispatch(actions.updateNewMessageText(event.target.value))}
                          value={newMessageText}/>
            </div>
            <div>
                <button onClick={() => dispatch(actions.addMessage())} className="btn btn-dark">Send</button>
            </div>
        </div>
    );
};

