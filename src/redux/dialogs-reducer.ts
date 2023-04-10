const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogsType = {
    id:number,
    name:string
}

type MessagesType = {
    id:number,
    message:string
}

export type DialogsPageType = {
    dialogs:DialogsType[],
    messages:MessagesType[],
    newMessageBody:string
}

const initialState:DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Vadim'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Viktor'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Great'},
        {id: 6, message: 'Yo'},
    ],
    newMessageBody: ''
};

export const dialogsReducer =  (state:DialogsPageType = initialState, action:ActionType):DialogsPageType => {


    switch (action.type){

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody:action.body}

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {id: 7, message: body}
            return {...state,newMessageBody:'',messages:[...state.messages,newMessage]}

        default:
            return state
    }

}

export type ActionType = updateNewMessageBodyActionCreator | sendMessageActionCreator

export type updateNewMessageBodyActionCreator = ReturnType<typeof updateNewMessageBodyActionCreator>

export const updateNewMessageBodyActionCreator = (body:string) => {
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        body:body
    } as const
}

export type sendMessageActionCreator = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = () => {
    return {
        type:SEND_MESSAGE
    } as const
}