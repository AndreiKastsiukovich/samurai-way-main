import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostContainerPropsType} from "./Post/MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = MyPostContainerPropsType
export const MyPosts = (props:MyPostsPropsType) => {

    let postElement = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const onAddPost = (value:AddNewPostType) => {
        props.addNewPost(value.newPostText)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

type AddNewPostType = {
    newPostText:string
}

const AddNewPostForm:React.FC<InjectedFormProps<AddNewPostType>> = (props)  => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostText'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm<AddNewPostType>({form:'ProfileAddNewPostForm'})(AddNewPostForm)