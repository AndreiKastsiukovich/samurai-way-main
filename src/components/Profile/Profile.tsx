import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {PostDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    postData: PostDataType[]
    addNewPost:(postMessage:string)=>void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        postData,
        addNewPost,
        ...props
    }) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={postData}
                addNewPost={addNewPost}
            />
        </div>
    )
}