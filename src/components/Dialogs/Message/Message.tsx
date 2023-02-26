import React from "react";
import classes from "./../Dialogs.module.css";


type MessagePropsType= {
    message:string
}

export const Message = (props: MessagePropsType) => {

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessage.current?.value)
    }

    return (


        <div>
            <div className={classes.dialog}>{props.message}</div>

            <div>
                <textarea ref={newMessage}> </textarea>
            </div>

            <div>
                <button onClick={addMessage}>Add message</button>
            </div>

        </div>


    )
}