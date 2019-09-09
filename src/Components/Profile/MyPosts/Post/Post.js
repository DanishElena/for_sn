import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://i.piccy.info/i7/f7ae2cea4945661632adf5acd0e321cb/4-63-89/6397234/meinkun.jpg' />
            {props.message}
            <div className={s.likes}>like {props.likes}</div>
        </div>
    )

}

export default Post;