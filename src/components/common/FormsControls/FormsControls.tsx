import React from "react";
import styles from '../FormsControls/FormsControl.module.css'
import {WrappedFieldProps} from "redux-form";

const FormControl:React.FC<WrappedFieldProps> = ({input,meta:{touched,error},...restProps}) => {

    return (
        <div>
            <div  className={styles.formControl + '' + error ? styles.error : ''}>
                {restProps.children}
            </div>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {

    const {input,meta,children,...restProps} = props

     return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}


export const Input:React.FC<WrappedFieldProps> = (props) => {

    const {input,meta,children,...restProps} = props

    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>

}