import React from 'react';
import s from './Dialogs.module.css';

export const DialogItem =(props) => {
    return (
        <div className={s.dialog}>{props.name}</div>
    )
}

let newMessageElement = React.createRef();

let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
}
export const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.message}

        </div>
    )
}




const Dialogs = (props) => {

    let DialogsElements = props.state.DialogsData.map(d => <DialogItem name={d.name} key={d.id} />);
    let MessagesElements = props.state.MessagesData.map(m => <Messages key={m.id} message={m.message} />);

    return (

        <div className={s.dialogs}>
            <div></div>
            <div className={s.dialog_items}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div> <textarea className={s.textarea} ref={newMessageElement}> </textarea> </div>
                <div> <button onClick={addMessage} className={s.button}>Send message</button> </div>
            </div>
        </div>
    )
}

export default Dialogs;