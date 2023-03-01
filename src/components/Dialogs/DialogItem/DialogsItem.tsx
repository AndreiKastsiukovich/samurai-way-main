import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name:string
    id:number
}

export const  DialogItem:React.FC <DialogsItemPropsType> = (
    {
        name,
        id,
        ...props
    }) => {

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}