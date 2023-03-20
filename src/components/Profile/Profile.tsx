import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}