import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";


const Posts = (props) => {
  return (
      <div>
        <CreatePost addPost={props.addPost}/>
        <PublishedPosts state={props.state}/>
      </div>
  )
}

export default Posts;