import React from 'react';
import {ActionsType, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Vadim'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Viktor'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Great'},
        {id: 6, message: 'Yo'},
    ],
    newMessageBody: ''
};

export const dialogsReducer =  (state:DialogsPageType = initialState, action:ActionsType):DialogsPageType => {


    switch (action.type){

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody:action.body}

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {id: 7, message: body}
            return {...state,newMessageBody:'',messages:[...state.messages,newMessage]}

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