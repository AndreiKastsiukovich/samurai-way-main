import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

// @ts-ignore
ReactDOM.render(<App state={state} dialogsPage={state.dialogsPage}/>,document.getElementById('root'));