import React from "react";
import style from './PublishedPost.module.css';


const PublishedPost = (props) => {
  return (
          <div className={style.postBody}>
            <div className={style.postLogo}></div>
            <div>
              <p className={style.postText}>{props.body}</p>
            </div>
            <div>
              <span>Число лайков: {props.countLike}</span>
            </div>
          </div>
  )
}

export default PublishedPost;