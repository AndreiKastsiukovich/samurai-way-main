import React from 'react';
import {ActionsType, DialogsPageType, StateType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'


export const dialogsReducer =  (state:DialogsPageType, action:ActionsType) => {

    switch (action.type){

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body})
            return state

        default:
            return state
    }

}

export type updateNewMessageBodyActionCreator = ReturnType<typeof updateNewMessageBodyActionCreator>

export type sendMessageActionCreator = ReturnType<typeof sendMessageActionCreator>

export const updateNewMessageBodyActionCreator = (body:string) => {
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        body:body
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type:SEND_MESSAGE
    } as const
}