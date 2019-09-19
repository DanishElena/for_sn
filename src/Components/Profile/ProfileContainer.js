import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileToContainer, /*updateUserStatus*/} from "../../redux/profileReducer";
import {Preloader} from "../Preloader";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3 //this.props.authorizedUserId
        }
        // if (!userId) {
        //     this.props.history.push("/login")
        // }

        this.props.getProfileToContainer(userId);

    }

    render() {

        return <>
            <div className={s.content}>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile profile={this.props.profile} /*{updateUserStatus={this.props.updateUserStatus}}*/ />
            </div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId

})


export default compose(connect(mapStateToProps, {getProfileToContainer, /*updateUserStatus*/}),
    withRouter,
    WithAuthRedirect)(ProfileContainer);