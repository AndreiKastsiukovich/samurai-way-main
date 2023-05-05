import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

type PhotosType = {
    small: string,
    large: string
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

type StateType = {
    postData: PostDataType[],
    profile: ProfileType | null,
    status: string
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 2},
        {id: 2, message: 'My first post', likesCount: 13},
        {id: 3, message: 'Hi!', likesCount: 21},
        {id: 4, message: 'Good', likesCount: 16},
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action: ActionType): any => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0}
            return {...state, postData: [...state.postData, newPost], newPostText: ''}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }

}

type ActionType = addNewPostActionType
    | setUserProfileType
    | setStatusType

export type addNewPostActionType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (newPostText:string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export type setStatusType = ReturnType<typeof setStatus>

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const
}

export const getUserProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatusThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })

    }
}

export const updateStatusThunk = (newStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(newStatus)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(response.data))
                }
            })
    }
}

