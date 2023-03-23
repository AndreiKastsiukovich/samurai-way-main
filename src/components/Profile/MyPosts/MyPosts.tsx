import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostContainerPropsType} from "./Post/MyPostsContainer";


type MyPostsPropsType = MyPostContainerPropsType
export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = () => {
        props.addNewPost()
        props.updateNewPostText('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
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