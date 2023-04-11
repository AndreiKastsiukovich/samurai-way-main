import React from 'react';
import {Profile} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId:string
}

type RouterPropsType = RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profile:ProfileType
}

type MapDispatchToProps = {
    setUserProfile:(profile:ProfileType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouterPropsType

export class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
       let userId = this.props.match.params.userId;
       if (!userId) {
           userId = '2'
       }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }

}

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return{
        profile:state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export const ProfilesContainer = connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)