import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://image3.thematicnews.com/uploads/topics/preview/00/04/77/36/0e7a9d0e5c_256crop.jpg' />
            {props.message}
            <div className={s.likes}>like {props.likes}</div>
        </div>
    )

}

export default Post;