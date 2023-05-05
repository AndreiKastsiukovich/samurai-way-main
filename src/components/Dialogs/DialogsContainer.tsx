import React from 'react';
import {DialogsPageType, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage:DialogsPageType,
}

type MapDispatchToPropsType = {
    sendMessage:(newMessageBody:string)=>void
}

export type DialogsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs));