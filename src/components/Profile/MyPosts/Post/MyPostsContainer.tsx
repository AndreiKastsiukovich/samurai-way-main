import React from "react";
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, onPostChangeActionCreator, PostDataType} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../../redux/redux-store";

type MapStateToProsType = {
    postData: PostDataType[],
    newPostText: string
}

type MapDispatchToProps = {
    updateNewPostText:(text:string)=>void,
    addNewPost:()=>void
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
        updateNewPostText: (text:string) => {
            dispatch(onPostChangeActionCreator(text))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
            dispatch(onPostChangeActionCreator(''))
        }
    }
}

export const MyPostContainer = connect(mapStateToPros,mapDispatchToProps)(MyPosts)