import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }
    //  let pages1 = pages.map( page => <span className={props.currentPage === page && styles.selectedPage} onClick={() => {props.onPageChange(page)}}>{page}</span> )


        {/*<div>*/}
        {/*    { pages.map( p => {*/}
        {/*        return <span className={props.currentPage ===  p && styles.selectedPage }*/}
        {/*                     onClick={(e) => { props.onPageChange(p); }}>{p}</span>*/}
        {/*    })}*/}
        {/*</div>*/}
        debugger;
let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photoUrl}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                     <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.post(`http://localhost:3000/follow?${u.id}`,
                                    {"resultCode": 0,
                                        "userId": `${u.id}`},
                                    {headers: {"Content-Type": "application/json"}},
                                    {withCredentials: true})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`http://localhost:3000/follow?${u.id}`, {"resultCode": 1,
                                        "userId": `${u.id}`},
                                    {headers: {"Content-Type": "application/json"}},
                                    {withCredentials: true})
                                    .then(response => {
                                        if (response.data.resultCode === 1) {
                                            props.follow(u.id);
                                        }
                                    });
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;

