import React from "react";
import classes from "./../Dialogs.module.css";


type MessagePropsType= {
    message:string
}

export const Message:React.FC<MessagePropsType> = (
    {
        message,
        ...props
    }) => {


    return (


        <div>
            <div className={classes.dialog}>{message}</div>

        </div>


    )
}