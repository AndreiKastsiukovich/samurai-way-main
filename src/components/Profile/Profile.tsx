import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfi";
import {ActionsType, PostDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    postData: PostDataType[]
    newPostText:string
    dispatch:(action:ActionsType)=>void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        postData,
        newPostText,
        dispatch,
        ...props
    }) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={postData}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}