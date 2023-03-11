import React from 'react';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._callSubscriber()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
             this._callSubscriber()
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    } as const
}
export const onPostChangeActionCreator = (newText:string) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText:newText
    } as const
}

export type AddNewPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof onPostChangeActionCreator >

export type ActionsType = AddNewPostActionType | UpdateNewPostTextActionType



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
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}







