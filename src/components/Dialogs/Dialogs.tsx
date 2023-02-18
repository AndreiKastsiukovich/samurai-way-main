import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

export type DialogArrPropsType = {
    id: number,
    name: string,
}

export type MessageArrPropsType = {
    id: number,
    message: string,
}

export type DialogsPropsType = {
    dialogs:DialogArrPropsType[],
    messages:MessageArrPropsType[]
}

export const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.messages.map(el=><Message message={el.message}/>)

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