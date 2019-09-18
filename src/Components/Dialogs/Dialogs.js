import React from 'react';
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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


const Dialogs = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageText)
    }

    let state = props.dialogsPage;

    let DialogsElements = state.DialogsData.map(d => <DialogItem name={d.name} key={d.id}/>);
    let MessagesElements = state.MessagesData.map(m => <Messages key={m.id} message={m.message}/>);

    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (

        <div className={s.dialogs}>
            <div></div>
            <div className={s.dialog_items}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                <div>{MessagesElements}</div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={'newMessageText'} className={s.textarea}/>
            </div>
            <div>
                <button className={s.button}>Send message</button>
            </div>
        </form>
    )
}


const DialogsReduxForm = reduxForm({form: "AddMessageForm"})(DialogsForm)

export default Dialogs;