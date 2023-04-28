import React from 'react';
import {Profile} from "../Profile";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {getUserProfileThunk, ProfileType,} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profile: ProfileType,
}

type MapDispatchToProps = {
    getUserProfileThunk: (userId: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouterPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunk(userId)
    }

    render() {

        return (

            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk}),
        withRouter,
        withAuthRedirect,
    )(ProfileContainer)


//export default withAuthRedirect(connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent))