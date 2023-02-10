import React from 'react';
import classes from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Kirill
                </div>
                <div className={classes.dialog}>
                    Dimon
                </div>
                <div className={classes.dialog}>
                    Vadim
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Viktor
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you ?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>

    )
}