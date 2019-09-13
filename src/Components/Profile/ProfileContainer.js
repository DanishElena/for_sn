import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../redux/progfileReducer";
import {Preloader} from "../Preloader";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3
        }
         this.props.toggleIsFetching(true);
        axios.get("http://localhost:3000/users?id=" + userId,
            {headers: {"Content-Type": "application/json"}})
            .then(response => {
                this.props.setUserProfile(response.data);
                 this.props.toggleIsFetching(false);
            })
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withRouteContainer);