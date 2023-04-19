import React from "react";
import DialogContent from "./DialogContent/DialogContent";
import CreateMessage from "./CreateMessage/CreateMessage";






const Dialog = (props) => {
    return (
        <div>
            <DialogContent state={props.state}/>
            <CreateMessage dispatch={props.dispatch} newMessageText={props.state.newMessageText}/>
        </div>
        )

}

export default Dialog;