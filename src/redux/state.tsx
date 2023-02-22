import React from 'react';

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
}

export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi how are you?', likesCount: 2},
            {id: 2, message: 'My first post', likesCount: 13},
            {id: 3, message: 'Hi!', likesCount: 21},
            {id: 4, message: 'Good', likesCount: 16},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Kirill'},
            {id: 3, name: 'Dimon'},
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
            {id: 5, message: 'Yo'},
        ]
    }

}