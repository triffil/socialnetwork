import style from "./CreateMessage.module.css"
import React from "react";


const CreateMessage = (props) => {
    let newMessageElement = React.createRef()

    const onSendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }
    let onChangeMessage = () => {
        let newMessageValue = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', messageText: newMessageValue};
        props.dispatch(action);
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