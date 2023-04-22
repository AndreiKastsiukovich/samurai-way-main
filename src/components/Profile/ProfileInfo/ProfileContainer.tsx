import React from 'react';
import {Profile} from "../Profile";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {getUserProfileThunk, ProfileType,} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId:string
}

type RouterPropsType = RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profile:ProfileType,
    isAuth:boolean
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

        if(!this.props.isAuth) return <Redirect to='/login'/>

        return (

            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }

}

const mapStateToProps = (state:StateType):MapStateToPropsType => {
    return{
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getUserProfileThunk})(WithUrlDataContainerComponent)