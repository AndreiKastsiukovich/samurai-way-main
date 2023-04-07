import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userImage.png'
import {UsersContainerType} from "./UsersContainer";

type UsersPropsType = UsersContainerType

export class UsersClass extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)

        let pages = [];

        for(let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>

                <div>
                    {pages.map((el)=>{
                        return (
                            <span className={this.props.currentPage === el ? styles.selectedPage : ''}
                                  onClick={()=>{this.onPageChanged(el)}}>{el}</span>
                        )
                    })}
                </div>

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