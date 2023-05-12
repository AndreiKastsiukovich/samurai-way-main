import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfileThunk, getUserStatusThunk, ProfileType, updateStatusThunk,} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profile: ProfileType,
    status:string,
    authorizedUserId:null|number,
    isAuth:boolean
}

type MapDispatchToProps = {
    getUserProfileThunk: (userId: string) => void,
    getUserStatusThunk: (userId: string) => void,
    updateStatusThunk:(newStatus: string)=>void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouterPropsType

class ProfileContainer extends React.Component< ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '28522'
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() {

        return (

            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusThunk}
                />
            </div>
        )
    }

}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk,getUserStatusThunk,updateStatusThunk}),
        withRouter,
       // withAuthRedirect,
    )(ProfileContainer)


//export default withAuthRedirect(connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent))