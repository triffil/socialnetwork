import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";







const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Dialog sendMessage={props.sendMessage} updateNewMessageText={props.updateNewMessageText} state={props.state}/>
        </div>
    )
}

export default Dialogs;