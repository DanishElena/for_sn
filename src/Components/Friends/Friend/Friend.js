import React from 'react';
import s from './Friend.module.css';



export const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.ava} className={s.ava}/>
            <p className={s.name} >{props.name} </p>
        </div>

    )
}

export default Friend;