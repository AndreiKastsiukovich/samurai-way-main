import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImage.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: UsersType[],
    followingInProgress: Array<any>
    followThunk:(userId:number)=>void
    unfollowThunk:(userId:number)=>void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    return (
                        <span className={props.currentPage === el ? styles.selectedPage : ''}
                              onClick={() => {
                                  props.onPageChanged(el)
                              }}>{el}</span>
                    )
                })}
            </div>

            {props.users.map((el) => {
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                     <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                          className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {el.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                              onClick={() => {
                                               props.unfollowThunk(el.id)
                                              }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === el.id)}
                                              onClick={() => {
                                                  props.followThunk(el.id)
                                              }}>Follow</button>}
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
    )
}