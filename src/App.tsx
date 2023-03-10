import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/state";

export type AppPropsType = {
    state:StateType
    dispatch:(action:ActionsType)=>void
}

const App: React.FC<AppPropsType> = (
    {
        state,
        dispatch,
        ...props
}) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogs={state.dialogsPage.dialogs}
                           messages={state.dialogsPage.messages}
                           newMessageBody={state.dialogsPage.newMessageBody}
                           dispatch={dispatch}/>}/>

                <Route path='/profile'
                       render={() => <Profile
                           postData={state.profilePage.postData}
                           dispatch={dispatch}
                           newPostText={state.profilePage.newPostText}
                           />}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
