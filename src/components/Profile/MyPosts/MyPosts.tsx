import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType,} from "../../../redux/state";

type MyPostsPropsType = {
    postData:PostDataType[],
    addNewPost:(postMessage:string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        postData,
        addNewPost,
        ...props
    }) => {

    let postElement = postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current){
            addNewPost(newPostElement.current.value);
        }
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {postElement}

            </div>
        </div>
    )
}