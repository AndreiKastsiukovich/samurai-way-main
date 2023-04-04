import React from 'react';
import {AddNewPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {dialogsReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";


export const store:StoreType = {
    _state: {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi how are you?', likesCount: 2},
            {id: 2, message: 'My first post', likesCount: 13},
            {id: 3, message: 'Hi!', likesCount: 21},
            {id: 4, message: 'Good', likesCount: 16},
        ],
        newPostText:'Add new post'
    },

    dialogsPage: {
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
    },

},
    _callSubscriber () {
        console.log('State change!')
    },

    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)

        this._callSubscriber()

    }
}

export type ActionsType = AddNewPostActionType | UpdateNewPostTextActionType
    | updateNewMessageBodyActionCreator | sendMessageActionCreator

export type StoreType = {
    _state:StateType,
    _callSubscriber:()=>void,

    getState:()=>StateType,
    subscribe:(observer:()=>void)=>void,

    dispatch:(action:ActionsType)=>void
}

export type MessagesType = {
    id: number,
    message: string,
}

export type DialogsType = {
    id: number,
    name: string,
}

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    postData: PostDataType[]
    newPostText:string
}

export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody:string

}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}







