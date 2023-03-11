import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType, addPostActionCreator, onPostChangeActionCreator, PostDataType,} from "../../../redux/state";

type MyPostsPropsType = {
    postData:PostDataType[],
    newPostText:string
    dispatch:(action:ActionsType)=>void
}


export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        postData,
        newPostText,
        dispatch,
        ...props
    }) => {

    let postElement = postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

    const addPost = () => {
     dispatch(addPostActionCreator());
     dispatch(onPostChangeActionCreator(''))
     //dispatch({type: 'UPDATE-NEW-POST-TEXT',newText:''})
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onPostChangeActionCreator(e.currentTarget.value))
       // dispatch({type:'UPDATE-NEW-POST-TEXT',newText:e.currentTarget.value})
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