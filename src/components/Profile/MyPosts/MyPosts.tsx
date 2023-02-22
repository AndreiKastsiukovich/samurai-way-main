import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType, state} from "../../../redux/state";

export const MyPosts:React.FC<ProfilePageType> = (props) => {

    let postElement = state.profilePage.postData.map(el=> <Post message={el.message} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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