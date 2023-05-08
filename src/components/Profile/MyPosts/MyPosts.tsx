import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostContainerPropsType} from "./Post/MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


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

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm:React.FC<InjectedFormProps<AddNewPostType>> = (props)  => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'Post message'}
                    validate={[required,maxLength10]}
                />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm<AddNewPostType>({form:'ProfileAddNewPostForm'})(AddNewPostForm)