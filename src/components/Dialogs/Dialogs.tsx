import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem";
import {Message} from "./Message";

export const Dialogs = () => {

    let dialogsData = [
        {id:1, name:'Andrey'},
        {id:2, name:'Kirill'},
        {id:3, name:'Dimon'},
        {id:4, name:'Vadim'},
        {id:5, name:'Sergey'},
        {id:6, name:'Viktor'},
    ]

    let messageData = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you ?'},
        {id:3, message:'Hello'},
        {id:4, message:'Yo!'},
        {id:5, message:'Great'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[0].id}/>


            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>

    )
}