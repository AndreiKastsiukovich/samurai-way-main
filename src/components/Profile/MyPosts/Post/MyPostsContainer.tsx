import React from "react";
import {MyPosts} from "../MyPosts";
import {addPostActionCreator,PostDataType} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../../redux/redux-store";

type MapStateToProsType = {
    postData: PostDataType[],
    newPostText: string
}

type MapDispatchToProps = {
    addNewPost:(newPostText:string)=>void
}

export type MyPostContainerPropsType = MapStateToProsType & MapDispatchToProps

const mapStateToPros = (state:StateType):MapStateToProsType => {
    return{
        postData:state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return{
        addNewPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export const MyPostContainer = connect(mapStateToPros,mapDispatchToProps)(MyPosts)