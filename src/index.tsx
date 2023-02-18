import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postData = [
    {id:1,message:'Hi how are you?',likesCount:2},
    {id:2,message:'My first post',likesCount:13},
    {id:3,message:'Hi!',likesCount:21},
    {id:4,message:'Good',likesCount:16},
]

let dialogs = [
    {id:1, name:'Andrey'},
    {id:2, name:'Kirill'},
    {id:3, name:'Dimon'},
    {id:4, name:'Vadim'},
    {id:5, name:'Sergey'},
    {id:6, name:'Viktor'},
]

let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you ?'},
    {id:3, message:'Hello'},
    {id:4, message:'Yo!'},
    {id:5, message:'Great'},
    {id:5, message:'Yo'},
]

ReactDOM.render(<App
        postData={postData}
        dialogs={dialogs}
        messages={messages}


    />,document.getElementById('root'));