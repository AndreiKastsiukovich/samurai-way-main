const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type ContactsType = {
    facebook:string,
    website:string,
    vk:string,
    twitter:string,
    instagram:string,
    youtube:string,
    github:string,
    mainLink:string
}

type PhotosType = {
    small:string,
    large:string
}

export type ProfileType = {
    aboutMe:string,
    contacts: ContactsType,
    lookingForAJob:boolean,
    lookingForAJobDescription:string,
    fullName:string,
    userId:number,
    photos: PhotosType
}

export type PostDataType = {
    id:number,
    message:string,
    likesCount:number
}

type StateType = {
    postData:PostDataType[],
    newPostText:string,
    profile:ProfileType
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 2},
        {id: 2, message: 'My first post', likesCount: 13},
        {id: 3, message: 'Hi!', likesCount: 21},
        {id: 4, message: 'Good', likesCount: 16},
    ],
    newPostText:'Add new post',
    profile: null
};

export  const profileReducer =  (state:any = initialState, action:ActionType):any => {
    switch (action.type){

        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state,postData:[...state.postData,newPost],newPostText:''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,newPostText:action.payload.newText}
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.payload.profile}
        }
        default:
            return state
    }

}

type ActionType = addNewPostActionType
    | updateNewPostTextActionType
    | setUserProfileType

export type addNewPostActionType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    } as const
}

export type updateNewPostTextActionType = ReturnType<typeof onPostChangeActionCreator >

export const onPostChangeActionCreator = (newText:string) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        payload:{
            newText
        }

    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile:ProfileType) => {
    return{
        type:SET_USER_PROFILE,
        payload:{
            profile
        }
    }as const
}
