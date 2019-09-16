import React from 'react';
import Header from "../Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/authReducer";
import {usersAPI} from "../../../api/api";



class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getLogin()
            .then(data => {

                if (data.resultCode === 0) {
                    let {email, login, userId} = data.data;
                    this.props.setAuthUserData(email, login, userId);
                }
        })
    }


    render() {
        return <Header {...this.props}/>

    }
}

const mapStateToProps= (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);