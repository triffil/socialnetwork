import React from "react";
import style from './CreatePost.module.css'


const CreatePost = () => {
  return (
      <div>
        <div className={`${style.createPost} mb-20`}>
          <p>Create new post</p>
          <textarea
            className={`${style.inputPost} mb-20`}
            placeholder="your news..."
            rows={2}
          ></textarea>
          <button className={style.btnSend}>Send</button>
        </div>
      </div>
  )
}

export default CreatePost;