import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import style from "../common/FormsControls/FormsControl.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required]}
                    placeholder={'Email'}
                    name={'email'}
                />
            </div>
            <div>
                <Field
                    component={Textarea}
                    validate={[required]}
                    placeholder={'Password'}
                    type='password'
                    name={'password'}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type='checkbox'
                />
                remember me
            </div>
            {props.error &&
                <div className={style.formSummeryError}>
                    {props.error}
                </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)