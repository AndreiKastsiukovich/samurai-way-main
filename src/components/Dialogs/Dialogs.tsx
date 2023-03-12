import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsType,
    MessagesType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType[],
    messages:MessagesType[],
    newMessageBody:string
    dispatch:(action:ActionsType)=>void
}

export const Dialogs :React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        newMessageBody,
        dispatch,
        ...props
    }) => {

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    const messagesElements = messages.map(el=><Message message={el.message}/>)

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
     let body = event.currentTarget.value;
     dispatch(updateNewMessageBodyActionCreator(body))
    }

    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
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
