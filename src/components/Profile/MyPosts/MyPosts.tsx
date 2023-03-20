import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType,PostDataType,} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postData:PostDataType[],
    newPostText:string
    updateNewPostText:(text:string)=>void,
    addNewPost:()=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        postData,
        newPostText,
        updateNewPostText,
        addNewPost,
        ...props
    }) => {

    let postElement = postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = () => {
        addNewPost()
        updateNewPostText('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {postElement}

            </div>
        </div>
    )
}