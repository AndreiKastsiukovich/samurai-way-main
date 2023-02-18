import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {DialogArrPropsType, Dialogs, MessageArrPropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    postData:PostDataType[],
    dialogs:DialogArrPropsType[],
    messages:MessageArrPropsType[],
}

const App = (props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={()=><Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}/>}/>

                    <Route path='/profile' render={()=><Profile
                        postData={props.postData}/>}/>

                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>

            </div>
        </BrowserRouter>);
}

export default App;
