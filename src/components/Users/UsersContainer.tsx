import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import {UsersClass} from "./UsersClass";

type MapStateToPropsType = {
    users:UsersType[]
}

type MapDispatchToProps = {
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:UsersType[])=>void
}

export type UsersContainerType =  MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        users :state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass)