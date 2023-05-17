import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {DialogActionType, dialogsReducer} from "./dialogs-reducer";
import {UserActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppActionType, appReducer} from "./app-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type StateType = ReturnType<typeof store.getState>




export type ActionType = UserActionType
    | AuthActionType
    | DialogActionType
    | ProfileActionType
    | AppActionType