import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserDataThunk} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean,
    login:null|string
}

type MapDispatchToProps = {
    getUserDataThunk:()=>void

}

export type HeaderContainerType =  MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        this.props.getUserDataThunk()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }

}
const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}


export default connect(mapStateToProps,{getUserDataThunk})(HeaderContainer)