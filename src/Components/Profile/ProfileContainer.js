import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileToContainer} from "../../redux/progfileReducer";
import {Preloader} from "../Preloader";
import {withRouter} from "react-router-dom";



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
                <Profile profile={this.props.profile}/>
            </div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching

})

const withRouteContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileToContainer})(withRouteContainer);