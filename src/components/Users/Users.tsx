import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userImage.png'

type UsersPropsType = UsersContainerType

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.map((el) => {
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={() => {
                                        props.follow(el.id)
                                    }}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        props.unfollow(el.id)
                                    }}>FOLLOW</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{'location.city'}</div>
                                <div>{'location.country'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};
