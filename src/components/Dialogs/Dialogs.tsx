import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogs = [
        {id:1, name:'Andrey'},
        {id:2, name:'Kirill'},
        {id:3, name:'Dimon'},
        {id:4, name:'Vadim'},
        {id:5, name:'Sergey'},
        {id:6, name:'Viktor'},
    ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you ?'},
        {id:3, message:'Hello'},
        {id:4, message:'Yo!'},
        {id:5, message:'Great'},
        {id:5, message:'Yo'},
    ]

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