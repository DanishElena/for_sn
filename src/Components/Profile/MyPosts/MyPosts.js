import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let PostsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD_POST'});
    }

    let OnPostChange = () => {
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE_NEW_POST_TEXT',
            newText: text
        }
        props.dispatch(action);
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={OnPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button className={s.button} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    )

}

export default MyPosts;