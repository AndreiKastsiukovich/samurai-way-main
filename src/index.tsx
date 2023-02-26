import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state,addNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             addNewPost={addNewPost}/>
    </BrowserRouter>
    , document.getElementById('root'));