import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImage.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    onPageChanged:(pageNumber:number)=>void,
    users:UsersType[],
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
}

export const Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

    let pages = [];

    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return(
        <div>
            <div>
                {pages.map((el)=>{
                    return (
                        <span className={props.currentPage === el ? styles.selectedPage : ''}
                              onClick={()=>{props.onPageChanged(el)}}>{el}</span>
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
                                    ? <button onClick={() => {

                                        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                        //     withCredentials:true,
                                        //     headers:{
                                        //         "API-KEY": "86a7e923-2a12-411a-8d2e-f316074f52d1"
                                        //     }
                                        // })

                                        usersAPI.followUsers(el.id)
                                            .then(response => {
                                                if (response.data.resultCode == 0){
                                                    props.follow(el.id)
                                                }
                                            });


                                    }}>Unfollow</button>

                                    : <button onClick={() => {

                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},{
                                        //     withCredentials:true,
                                        //     headers:{
                                        //         "API-KEY": "86a7e923-2a12-411a-8d2e-f316074f52d1"
                                        //     }
                                        // })

                                        usersAPI.unfollowUsers(el.id)
                                            .then(response => {
                                                if (response.data.resultCode == 0){
                                                    props.unfollow(el.id)
                                                }
                                            });

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