import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth:boolean,
    login:null|string
    logoutThunk:()=>void
}

export const Header = (props:HeaderPropsType) => {

    const onClickHandler = () => {
        props.logoutThunk()
    }
    return <header className={classes.header}>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUEwts4uoA2Zk4uGFSWayTNfoLgraSoxF2g&usqp=CAU'/>

        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={onClickHandler}>Log out</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>

            </header>

}