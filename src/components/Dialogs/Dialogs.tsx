import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType, state} from "../../redux/state";

export const Dialogs :React.FC<DialogsPageType> = (props) => {

    let dialogsElements = state.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = state.dialogsPage.messages.map(el=><Message message={el.message}/>)

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