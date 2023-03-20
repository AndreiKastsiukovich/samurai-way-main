import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return(

        <StoreContext.Consumer>
        {(store) => {

            const state = store.getState().dialogsPage

            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))
            }

            const onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogPage={state}/>
        }
        }
    </StoreContext.Consumer>

    )
}
