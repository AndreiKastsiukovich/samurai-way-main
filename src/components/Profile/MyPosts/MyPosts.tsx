import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type PostDataType = {
    id:number,
    message:string,
    likesCount:number
}

export type MyPostsPropsType={
    postData:PostDataType[]
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

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