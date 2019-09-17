import React from 'react';
import {addPostAction, updateNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {sendMessageAction, updateNewMessageTextAction} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAction());
        },
        updateNewPostText: (text) => {
            let action = updateNewMessageTextAction(text);
            dispatch(action)
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;