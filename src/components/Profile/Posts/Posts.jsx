import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import posts from './Posts.module.css'
import PublishedPosts from "./PublishedPosts/PublishedPosts";


const Posts = () => {
  return (
      <div className='posts'>
        <CreatePost />
        <PublishedPosts />
      </div>
  )
}

export default Posts;