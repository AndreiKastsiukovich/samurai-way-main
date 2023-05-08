import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";


type LoginPropsType = {
    loginThunk:(email:string,password:string,rememberMe:boolean)=>void
}

export const Login = (props:LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.loginThunk(formData.email,formData.password,formData.rememberMe)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

// export default connect (null,{loginThunk}) (Login)