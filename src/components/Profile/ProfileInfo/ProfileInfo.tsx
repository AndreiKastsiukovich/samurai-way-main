import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile:ProfileType,
    status:string,
    updateStatus:(newStatus: string)=>void
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images.pexels.com/photos/4613547/pexels-photo-4613547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}