import {getUserDataThunk} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {ActionType, StateType} from "./redux-store";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType): typeof state => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS' : {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export type AppActionType = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}

export type ThunkType = ThunkAction<void, StateType, unknown, ActionType>

export const initializeAppTC = ():ThunkType => (dispatch:any) => {
       const promise = dispatch(getUserDataThunk())
        Promise.all([promise])
        promise.then(()=>{
            dispatch(initializedSuccessAC())
        })
    }
