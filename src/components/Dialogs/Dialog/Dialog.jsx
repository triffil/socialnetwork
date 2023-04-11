import style from "./Dialog.module.css";
import React from "react";
import {NavLink} from "react-router-dom";




const Dialog = (props) => {
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

    let dialogItems = props.state.dialogUsers.map(dialogItem => <DialogItem id={dialogItem.id} name={dialogItem.name}/>)
    let messageItems = props.state.dialogMessages.map(messageItem => <Message message={messageItem.message}/>)

    return (
        <div className={style.dialogWrapper}>
            <div>
                <ul className={style.dialogList}>
                    { dialogItems }
                </ul>
            </div>
            <div>
                { messageItems }
            </div>
        </div>
    )
}

export default Dialog;