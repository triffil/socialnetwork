import React from "react";
import style from './CreatePost.module.css'


const CreatePost = (props) => {
    let newLet = React.createRef()
    const sendPost = () => {
        let finalLet = newLet.current.value;
        props.addPost(finalLet);
    }

  return (
      <div>
        <div className={`${style.createPost} mb-20`}>
          <p>Create new post</p>
          <textarea ref={newLet}
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