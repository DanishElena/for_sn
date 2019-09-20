import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import {requiredField} from "../Validators/Validators";


const LoginForm = (handleSubmit) => {
return (
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [requiredField], Input)}
        {createField("Password", "password", [requiredField], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

        <div>
            <button>Login</button>
        </div>
    </form>
)
}

const LoginReduxForm = reduxForm({form: "Login"})(LoginForm)

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
if(props.isAuth) {
    return <Redirect to={"/profile"}/>
}
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);