import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {PostDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    postData: PostDataType[]
    addNewPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        postData,
        addNewPost,
        newPostText,
        updateNewPostText,
        ...props
    }) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={postData}
                addNewPost={addNewPost}
                newPostText={newPostText}
                updateNewPostText={updateNewPostText}
            />
        </div>
    )
}