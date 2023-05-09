import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {Redirect} from "react-router-dom";


type LoginPropsType = {
    loginThunk:(email:string,password:string,rememberMe:boolean)=>void
    isAuth:boolean
}

export const Login = (props:LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.loginThunk(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
