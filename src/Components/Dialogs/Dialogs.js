import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageAction, updateNewMessageTextAction} from "../../redux/dialogsReducer";


export const DialogItem =(props) => {

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




const Dialogs = (props) => {
debugger;
    let onSendMessage = () => {
        props.store.dispatch(sendMessageAction())
    }

    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(updateNewMessageTextAction(newMessage))
    }
    let state = props.store.getState().dialogsPage;

    let DialogsElements = state.DialogsData.map(d => <DialogItem name={d.name} key={d.id} />);
    let MessagesElements = state.MessagesData.map(m => <Messages key={m.id} message={m.message} />);
    let newMessageText = state.newMessageText;

    return (

        <div className={s.dialogs}>
            <div></div>
            <div className={s.dialog_items}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <div> <textarea value={newMessageText}
                                className={s.textarea}
                                onChange={onMessageChange}>

                </textarea> </div>
                <div> <button onClick={onSendMessage} className={s.button}>Send message</button> </div>
            </div>
        </div>
    )
}

export default Dialogs;