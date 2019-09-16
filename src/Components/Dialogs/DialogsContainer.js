import React from 'react';
import {sendMessageAction, updateNewMessageTextAction} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAction());
        },
        updateNewMessage: (newMessage) => {
            dispatch(updateNewMessageTextAction(newMessage))
        }
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);;