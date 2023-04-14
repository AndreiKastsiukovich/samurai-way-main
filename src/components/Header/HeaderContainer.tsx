import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth:boolean,
    login:null|string
}

type MapDispatchToProps = {
    setAuthUserData:(userId:number, login:string, email:string)=>void

}

export type HeaderContainerType =  MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials:true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let { id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            });
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


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)