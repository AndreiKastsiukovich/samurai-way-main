import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

type DialogsPropsType = DialogsContainerType

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    const messagesElements = state.messages.map(el => <Message key={el.id} message={el.message}/>)

    const addNewMessage = (values:AddMessageType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

type AddMessageType = {
    newMessageBody:string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm:React.FC<InjectedFormProps<AddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required,maxLength100]}
                    name={'newMessageBody'}
                    placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageType>({form:'dialogAddMessageForm'})(AddMessageForm)