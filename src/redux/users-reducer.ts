const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

// export type UsersType = {
//     id:number,
//     followed:boolean,
//     fillName:string,
//     status:string,
//     location:{
//         city:string,
//         country:string
//     }
//     photoUrl:string
// }

export type UsersType = {
    name:string,
    id:number,
    uniqueUrlName:string|undefined,
    photos:{
        small:string|undefined,
        large:string|undefined,
    }
    status:string|undefined,
    followed:boolean
}

export type StateType = {
    users:UsersType[]
}

const initialState:StateType = {
    users:[] as UsersType[]
}

export const usersReducer = (state:StateType = initialState,action:ActionType):StateType => {
    switch (action.type){
        case FOLLOW:{
            return {...state,users:state.users.map((el)=>el.id === action.payload.userID ? {...el,followed:true} : el )}
        }
        case UNFOLLOW:{
            return {...state,users: state.users.map((el)=>el.id === action.payload.userID ? {...el,followed:false} : el )}
        }
        case SET_USERS:{
            return {...state,users: [...state.users,...action.payload.users]}
        }
        default:return state
    }
}

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userID:number) => {
    return{
        type:FOLLOW,
        payload:{
            userID
        }
    }as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userID:number) => {
    return{
        type:UNFOLLOW,
        payload:{
            userID
        }
    }as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users:UsersType[]) => {
    return{
        type:SET_USERS,
        payload:{
            users
        }
    }as const
}