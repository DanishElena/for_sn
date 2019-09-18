import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {requiredField} from "../Validators/Validators";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";

const LoginForm = (props) => {
return (
    <form onSubmit={props.handleSubmit}>
     <div>
         <Field placeholder={'login'} name={'login'} component={Input} validate={[requiredField]}/>
     </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={Input} validate={[requiredField]} type={"password"}/>
        </div>
        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me
        </div>
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

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {login})(Login);