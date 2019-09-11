import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://house-animals.ru/sites/default/files/media/user-1/trehcvetnaya-koshka-256.jpg',
                    followed: false,
                    fullName: 'Tomas',
                    status: 'I like fish',
                    location: {city: 'Petropavl', country: 'Kazakhstan'}
                },
                {
                    id: 2,
                    photoUrl: 'https://ranbus.fra1.cdn.digitaloceanspaces.com/images/avatars/2019/01/154745223793wK7X5xCi.jpg',
                    followed: true,
                    fullName: 'Silvester',
                    status: 'I live in Moscow!',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://house-animals.ru/sites/default/files/media/user-1/grey-cat-256.jpg',
                    followed: false,
                    fullName: 'Keks',
                    status: 'Hi, I very happy cat!',
                    location: {city: 'Ekaterinburg', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://house-animals.ru/sites/default/files/media/user-1/redhead-cat-256.jpg',
                    followed: false,
                    fullName: 'Semen',
                    status: 'Hello everyone!',
                    location: {city: 'Perm', country: 'Russia'}
                },
                {
                    id: 5,
                    photoUrl: 'https://www.stylist.co.uk/images/app/uploads/2017/10/24184627/d82c29b23a574d0de11df28351edde1e-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
                    followed: true,
                    fullName: 'Salvador',
                    status: 'Hello, let\'s go to cinema!',
                    location: {city: 'Ekaterinburg', country: 'Russia'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
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
                        <div>{u.fullName}</div>
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