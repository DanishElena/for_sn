import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";





const Friends= (props) => {


    let FriendsItems = props.store1._state.friendsArea.map(f => <Friend name={f.name} id={f.id} ava={f.ava}/>);

    return (

        <div className={s.content}>
            <p className={s.friends}>My friends</p>
            {FriendsItems}
        </div>

    )
}

export default Friends;

