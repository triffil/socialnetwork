import style from "./CreateMessage.module.css"
import React from "react";
import {sendMessage} from "../../../../redux/state";

const CreateMessage = (props) => {
    let newMessageElement = React.createRef()

    let onChangeMessage = () => {
        let newMessageValue = newMessageElement.current.value;
        props.updateNewMessageText(newMessageValue);
    }
    const onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div>
            <div className={`${style.createMessage} mb-20`}>
                <textarea onChange={onChangeMessage} value={props.newMessageText} ref={newMessageElement}
                          className={`${style.inputMessage} mb-20`}
                          placeholder="your news..."
                          rows={2}
                ></textarea>
                <button onClick={onSendMessage} className={style.btnSend}>Send</button>
            </div>
        </div>
    )
}

export default CreateMessage;