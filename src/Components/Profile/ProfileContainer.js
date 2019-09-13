import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../redux/progfileReducer";
import {Preloader} from "../Preloader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3000/users`,
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);