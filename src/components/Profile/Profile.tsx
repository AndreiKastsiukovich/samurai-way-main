import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://images.pexels.com/photos/4613547/pexels-photo-4613547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}