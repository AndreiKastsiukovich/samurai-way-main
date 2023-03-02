import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType,} from "../../../redux/state";

type MyPostsPropsType = {
    postData:PostDataType[],
    addNewPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        postData,
        addNewPost,
        newPostText,
        updateNewPostText,
        ...props
    }) => {

    let postElement = postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

    const addPost = () => {
     addNewPost();
     updateNewPostText('')
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      updateNewPostText(e.currentTarget.value)
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
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {postElement}

            </div>
        </div>
    )
}