import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageAction, updateNewMessageTextAction} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


export const DialogItem = (props) => {

    return (
        <div className={s.dialog}>{props.name}</div>
    )
}

export const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.message}

        </div>
    )
}


const DialogsContainer = (props) => {
    let state = props.dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageAction())
    }

    let onMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageTextAction(newMessage))
    }


    return (
        <Dialogs updateNewMessage={onMessageChange}
                 sendMessage={onSendMessage}
        dialogPage={state}/>
    )
}

export default DialogsContainer;