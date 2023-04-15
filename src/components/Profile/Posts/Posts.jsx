import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";


const Posts = (props) => {
  return (
      <div>
        <CreatePost newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        <PublishedPosts state={props.state}/>
      </div>
  )
}

export default Posts;