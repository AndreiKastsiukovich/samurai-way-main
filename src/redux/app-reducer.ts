import {getUserDataThunk} from "./auth-reducer";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionType): typeof state => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS' : {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

type ActionType = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}

export const initializeAppTC = () => {
    return (dispatch: any) => {
       const promise = dispatch(getUserDataThunk())
        Promise.all([promise])
        promise.then(()=>{
            dispatch(initializedSuccessAC())
        })
    }
}
