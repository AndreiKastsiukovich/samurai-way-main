const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
    error:null
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
    isFetching:boolean
}

const initialState:StateType = {
    users:[],
    error:null,
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:false
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
            return {...state,users: action.payload.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.payload.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUsersCount:action.payload.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.payload.isFetching}
        }
        default:return state
    }
}

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType

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

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC = (currentPage:number) => {
    return {
        type:SET_CURRENT_PAGE,
        payload:{
            currentPage
        }
    }as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const setTotalUsersCountAC = (count:number) => {
    return {
        type:SET_TOTAL_USERS_COUNT,
        payload:{
            count
        }
    }as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export const toggleIsFetchingAC = (isFetching :boolean) => {
    return{
        type:TOGGLE_IS_FETCHING,
        payload:{
            isFetching
        }
    }as const
}