import React from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";


type MapStateToPropsType = {

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
                    loginThunk={this.props.loginThunk}/>
            </>
        )

    }
}

export default connect (null,{loginThunk}) (LoginContainer)