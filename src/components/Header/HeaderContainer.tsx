import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {logoutThunk} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean,
    login:null|string
}

type MapDispatchToProps = {
    logoutThunk:()=>void

}

export type HeaderContainerType =  MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType>{

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logoutThunk={this.props.logoutThunk}
        />
    }

}
const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}


export default connect(mapStateToProps,{logoutThunk})(HeaderContainer)