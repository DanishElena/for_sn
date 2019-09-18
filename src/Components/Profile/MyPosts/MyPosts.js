import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Validators/Validators";
import {Textarea} from "../../../FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    let PostsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

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
            <Field component={Textarea} placeholder={"Post message"} name={"myPostText"} validate={[requiredField, maxLength10]}/>
        </div>
        <div>
        <button className={s.button}>Add post</button>
</div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: "AddMyPost"})(MyPostForm)





export default MyPosts;