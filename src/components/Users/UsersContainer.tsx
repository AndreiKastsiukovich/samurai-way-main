import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import {UsersClass} from "./UsersClass";

type MapStateToPropsType = {
    users:UsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchToProps = {
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:UsersType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

export type UsersContainerType =  MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UsersType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass)