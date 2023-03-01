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

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessage.current?.value)
    }

    return (


        <div>
            <div className={classes.dialog}>{message}</div>

            <div>
                <textarea ref={newMessage}> </textarea>
            </div>

            <div>
                <button onClick={addMessage}>Add message</button>
            </div>

        </div>


    )
}