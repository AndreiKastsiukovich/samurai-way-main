import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {ProfilePageType, state} from "../../redux/state";

export const Profile:React.FC<ProfilePageType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={state.profilePage.postData}/>
        </div>
    )
}