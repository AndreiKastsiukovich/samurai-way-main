import React from 'react';
import {ActionsType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export  const profileReducer =  (state:ProfilePageType, action:ActionsType) => {
    switch (action.type){

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default:
            return state
    }

}

export type AddNewPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof onPostChangeActionCreator >

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
