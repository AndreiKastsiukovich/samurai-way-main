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
};

export const dialogsReducer =  (state:DialogsPageType = initialState, action:DialogActionType):DialogsPageType => {


    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            let newMessage = {id: 7, message: body}
            return {...state,messages:[...state.messages,newMessage]}

        default:
            return state
    }

}

export type DialogActionType = sendMessageActionCreator

export type sendMessageActionCreator = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (newMessageBody:string) => {
    return {
        type:SEND_MESSAGE,
        newMessageBody
    } as const
}