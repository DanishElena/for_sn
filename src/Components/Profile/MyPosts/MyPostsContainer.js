import React from 'react';
import Post from "./Post/Post";
import {addPostAction, updateNewPost} from "../../../redux/progfileReducer";
import MyPosts from "./MyPosts";
import {updateNewMessageTextAction} from "../../../redux/dialogsReducer";



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    // dispatch action
    let addPost = () => {
        props.store.dispatch(addPostAction());
    }

    let OnPostChange = (text) => {
        let action = updateNewMessageTextAction(text);
         props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={OnPostChange}
    addPost = {addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />)


}

export default MyPostsContainer;