import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";






const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Dialog state={props.state}/>
        </div>
    )
}

export default Dialogs;