import React from 'react';
import {DialogsPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage:DialogsPageType,
}

type MapDispatchToPropsType = {
    updateNewMessageBody:(body:string)=>void,
    sendMessage:()=>void
}

export type DialogsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        } ,
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs));