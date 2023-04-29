import React from "react";
import classes from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode:false
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
        this.state.editMode = true;
    }

    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.state.editMode = false
    }

    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            value={this.props.status}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}>

                        </input>
                    </div>
                }
            </div>

        )
    }


}