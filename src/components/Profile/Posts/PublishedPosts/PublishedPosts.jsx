import React from "react";
import PublishedPost from "./PublushedPost/PublishedPost";


const PublishedPosts = (props) => {

    let postsItems = props.state
        .map(postsItem => <PublishedPost body={postsItem.body} countLike={postsItem.countLike}/>)

  return (
        <div>
            {postsItems}
        </div>
  )
}

export default PublishedPosts;