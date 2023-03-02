import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, StateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addNewPost={addNewPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}

