import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
            return {...state,...action.data,isAuth:true}
        }

        default:return state
    }
}

type ActionType = FollowACType

type FollowACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = ( userId: null|number, login: null|string, email: null|string) => {
    return{
        type:SET_USER_DATA,
        data:{userId,login,email}
    }as const
}

export const getUserDataThunk = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0){
                    let { id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            });
    }
}