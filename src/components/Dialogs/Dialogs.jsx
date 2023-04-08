import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li className={style.dialogItem + ' ' + style.active}><NavLink to={path}>{props.name}</NavLink></li>
    )
}

const Message = (props) => {
    return (
        <div className={style.messageItem}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogUsers = [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'},
    ]

    let dialogMessages = [
        {id: 1, message: 'Message1'},
        {id: 2, message: 'Message2'},
        {id: 3, message: 'Message3'},
        {id: 4, message: 'Message4'},
        {id: 5, message: 'Message5'},
    ]

    let dialogItems = dialogUsers.map(dialogItem => <DialogItem id={dialogItem.id} name={dialogItem.name}/>)
    let messageItems = dialogMessages.map(messageItem => <Message message={messageItem.message}/>)


    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                <ul className={style.dialogList}>
                    { dialogItems }
                </ul>
            </div>
            <div className={style.dialogContent}>
                { messageItems }
            </div>
        </div>
    )
}

export default Dialogs;