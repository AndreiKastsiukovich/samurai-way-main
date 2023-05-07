import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {StateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'SET_USER_DATA'

export type DataType = {
    userId: null|number,
    login: null|string,
    email: null|string,
    isAuth: boolean
}

const initialState:DataType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState,action:ActionType):typeof state=> {
    switch (action.type){
        case SET_USER_DATA:{
            return {...state,...action.payload,isAuth:true}
        }

        default:return state
    }
}

type ActionType = FollowACType

type FollowACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = ( userId: null|number, login: null|string, email: null|string, isAuth:boolean) => {
    return{
        type:SET_USER_DATA,
        payload:{userId,login,email,isAuth}
    }as const
}

export type ThunkType = ThunkAction<void, StateType, unknown, ActionType>

export const getUserDataThunk = ():ThunkType => {
    return (dispatch,getState) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0){
                    let { id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email,true))
                }
            });
    }
}

export const loginThunk = (email:string,password:string,rememberMe:boolean):ThunkType => {
    return (dispatch,getState) => {
        authAPI.loginPost(email,password,rememberMe)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(getUserDataThunk())
                }
            });
    }
}

export const logoutThunk = ():ThunkType => {
        return (dispatch,getState) => {
        authAPI.loginDelete()
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null,false))
                }
            });
    }
}
