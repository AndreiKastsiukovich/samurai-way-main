import {ActionsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 2},
        {id: 2, message: 'My first post', likesCount: 13},
        {id: 3, message: 'Hi!', likesCount: 21},
        {id: 4, message: 'Good', likesCount: 16},
    ],
    newPostText:'Add new post'
};

export  const profileReducer =  (state:ProfilePageType = initialState, action:ActionsType):ProfilePageType => {
    switch (action.type){

        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state,postData:[...state.postData,newPost],newPostText:''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,newPostText:action.newText}
        }
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
