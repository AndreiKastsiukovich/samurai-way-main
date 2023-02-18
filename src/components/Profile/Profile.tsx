import React from 'react';
import classes from './Profile.module.css';
import {MyPosts, MyPostsPropsType, PostDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";

export const Profile = (props:MyPostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}