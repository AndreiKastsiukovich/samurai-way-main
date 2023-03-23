import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {MyPostContainer} from "./MyPosts/Post/MyPostsContainer";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}