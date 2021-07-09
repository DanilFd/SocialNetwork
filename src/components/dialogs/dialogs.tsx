import React, {useRef} from 'react';
import {User} from "./users/user";
import {Message} from "./messages/message";
import {actions} from '../../redux/dialogsReducer';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const Dialogs = () => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const {usersData, messagesData, newMessageText} = useTypedSelector(state => state.dialogsPage)
    const dispatch = useDispatch()
    return (
        <div style={{color: "white", maxHeight: "calc(70.66px-100vh)"}} className="position-relative">
            <div className="position-sticky container " style={{backgroundColor: "black", top: 70}}>
                хороший мини-хедер
            </div>
            <div className=" ">
                {usersData.map(user => <User name={user.name} key={user.id} id={user.id}/>)}
            </div>
            <div className="pos">
                {messagesData.map((message, i) => <Message key={i} message={message.message}/>)}
            </div>
            <div className="position-sticky" style={{bottom: 0}}>
                <div>
                    <form onSubmit={e => e.preventDefault()}>
                    <textarea style={{resize: "none"}} ref={newMessageElement}
                              onChange={event => dispatch(actions.updateNewMessageText(event.target.value))}
                              value={newMessageText}/>
                        <button onClick={() => dispatch(actions.addMessage())} className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

