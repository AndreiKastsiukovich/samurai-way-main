import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType[],
    messages:MessagesType[]
}

export const Dialogs :React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        ...props
    }) => {

    let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = messages.map(el=><Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>

    )
}
