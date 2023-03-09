import React from 'react';

export const store: StoreType = {
    _state: {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi how are you?', likesCount: 2},
            {id: 2, message: 'My first post', likesCount: 13},
            {id: 3, message: 'Hi!', likesCount: 21},
            {id: 4, message: 'Good', likesCount: 16},
        ],
        newPostText:'Отправьте сообщение!'
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
        ]
    }

},
    _callSubscriber () {
        console.log('State change!')
    },
    addNewPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._callSubscriber()
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    updateNewPostText (newText:string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    getState(){
        return this._state
    },

}

export type StoreType = {
    _state:StateType,
    addNewPost:()=>void,
    subscribe:(observer:()=>void)=>void
    updateNewPostText:(newText:string)=>void,
    _callSubscriber:()=>void,
    getState:()=>StateType,

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
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}







