import {StateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: StateType) => {
 return state.usersPage.users
}

// export const getUsersSuperSelector = createSelector((getUsersSelector,
// (users)=>{
//     return users
// })

export const getPageSizeSelector = (state: StateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: StateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: StateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: StateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state: StateType) => {
    return state.usersPage.followingInProgress
}