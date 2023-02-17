import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id:1,message:'Hi how are you?',likesCount:2},
        {id:2,message:'My first post',likesCount:13},
        {id:3,message:'Hi!',likesCount:21},
        {id:4,message:'Good',likesCount:16},
    ]

    let postElement = postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

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

                {postElement}

            </div>
        </div>
    )
}