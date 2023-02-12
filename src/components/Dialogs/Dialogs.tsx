import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={'Andrey'} id={'1'}/>
                <DialogItem name={'Kirill'} id={'2'}/>
                <DialogItem name={'Dimon'} id={'3'}/>
                <DialogItem name={'Vadim'} id={'4'}/>
                <DialogItem name={'Sergey'} id={'5'}/>
                <DialogItem name={'Viktor'} id={'6'}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you ?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>

    )
}