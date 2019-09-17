import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileToContainer, updateUserStatus} from "../../redux/profileReducer";
import {Preloader} from "../Preloader";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

debugger;

class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3
        }


        this.props.getProfileToContainer(userId);

    }

    render() {

        return <>
            <div className={s.content}>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile profile={this.props.profile} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,

})



export default compose(connect(mapStateToProps, {getProfileToContainer, updateUserStatus}),
    withRouter,
    WithAuthRedirect)(ProfileContainer);