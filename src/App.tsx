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
import {StateType, updateNewPostText} from "./redux/state";

export type AppPropsType = {
    state:StateType
    addNewPost:()=>void
    updateNewPostText:(newText:string)=>void
}

const App: React.FC<AppPropsType> = (
    {state,
        addNewPost,
        updateNewPostText,
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
                           messages={state.dialogsPage.messages}/>}/>

                <Route path='/profile'
                       render={() => <Profile
                           postData={state.profilePage.postData}
                           addNewPost={addNewPost}
                           newPostText={state.profilePage.newPostText}
                           updateNewPostText={updateNewPostText}
                           />}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
