import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userImage.png'
import {UsersContainerType} from "./UsersContainer";

type UsersPropsType = UsersContainerType

export class UsersClass extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map((el) => {
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
                                        this.props.follow(el.id)
                                    }}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        this.props.unfollow(el.id)
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
    }
}