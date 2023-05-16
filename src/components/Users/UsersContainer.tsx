import React from "react";
import {connect} from "react-redux";
import {followThunk, getUsers, unfollowThunk, UsersType} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}

export type UserContainerType = MapStateToPropsType & MapDispatchToProps

class UserContainer extends React.Component<UserContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk}


                />

            </>

        );
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
        {getUsers, followThunk, unfollowThunk}))(UserContainer)
