import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType,} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogPage:DialogsPageType
}

export const Dialogs :React.FC<DialogsPropsType> = (
    {
        updateNewMessageBody,
        sendMessage,
        dialogPage,
        ...props
    }) => {

    let state = dialogPage

    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    const messagesElements = state.messages.map(el=><Message message={el.message}/>)
    const newMessageBody = state.newMessageBody

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
     let body = event.currentTarget.value;
        updateNewMessageBody(body)
    }

    const onSendMessageClick = () => {
        sendMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>

    )
}
