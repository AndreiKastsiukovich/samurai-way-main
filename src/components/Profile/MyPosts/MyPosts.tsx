import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id:1,message:'Hi how are you?',likesCount:2},
        {id:2,message:'My first post',likesCount:13},
    ]

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[0].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}