import React from 'react';
import Header from "../Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/authReducer";



class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/login",
            {headers: {"Content-Type": "application/json"}},
           { withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {email, login, userId} = response.data.data;
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