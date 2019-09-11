import React from 'react';
import styles from './users.module.css';
import axios from "axios";

debugger;

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get(`http://localhost:3000/users`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => {
                props.setUsers(response.data)
            })
    }



    return <div >
        {
            props.users.map(u => <div key={u.id} className={styles.user}>
                <span>
                    <div>
                         <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
        export default Users;


