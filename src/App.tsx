import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UserContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized:boolean
}

type MapDispatchToProps = {
    initializeAppTC:()=>void
}

export type AppPropsType =  MapStateToPropsType & MapDispatchToProps

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/users' render={() => <UserContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>

                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>

                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        initialized:state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps,{initializeAppTC}))(App)
