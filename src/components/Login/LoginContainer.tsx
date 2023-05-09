import React from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth:boolean
}

type MapDispatchToProps = {
    loginThunk:(email:string,password:string,rememberMe:boolean)=>void
}

type LoginContainerType = MapStateToPropsType & MapDispatchToProps

class LoginContainer extends React.Component<LoginContainerType> {
    render() {
        return(
            <>
                <Login
                    loginThunk={this.props.loginThunk}
                    isAuth={this.props.isAuth}

                />
            </>
        )

    }
}

const mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps,{loginThunk}) (LoginContainer)