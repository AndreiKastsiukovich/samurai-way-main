import React from 'react';
import {Profile} from "../Profile";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {getUserProfileThunk, ProfileType,} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId:string
}

type RouterPropsType = RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profile:ProfileType
}

type MapDispatchToProps = {
    getUserProfileThunk:(userId:string)=>void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouterPropsType

class ProfileContainer extends React.Component<ProfileContainerType>{

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

export default connect(mapStateToProps,{getUserProfileThunk})(WithUrlDataContainerComponent)