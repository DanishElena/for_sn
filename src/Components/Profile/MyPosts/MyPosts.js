import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    let PostsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

  //  let newPostElement = React.createRef();



    // dispatch action
    let onAddPost = () => {

        props.addPost();
    }


    let addMyPost = (value) => {
        props.addPost(value.myPostText);
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
            <MyPostReduxForm  onSubmit={addMyPost}/>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    )

}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"myPostText"}/>
        </div>
        <div>
        <button className={s.button}>Add post</button>
</div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: "AddMyPost"})(MyPostForm)





export default MyPosts;