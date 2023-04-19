import React from "react";
import style from './CreatePost.module.css'


const CreatePost = (props) => {
    let newPostElement = React.createRef()
    const sendPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let textareaValue = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue};
        props.dispatch(action)

    }

  return (
      <div>
        <div className={`${style.createPost} mb-20`}>
          <p>Create new post</p>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}
            className={`${style.inputPost} mb-20`}
            placeholder="your news..."
            rows={2}
          ></textarea>
          <button onClick={sendPost} className={style.btnSend}>Send</button>
        </div>
      </div>
  )
}

export default CreatePost;