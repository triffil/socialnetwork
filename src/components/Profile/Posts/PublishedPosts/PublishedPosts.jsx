import React from "react";
import PublishedPost from "./PublushedPost/PublishedPost";


const PublishedPosts = () => {
    let postsFromServer = [
        {id: 1, body: 'Post1', countLike: 24},
        {id: 2, body: 'Post2', countLike: 2},
        {id: 3, body: 'Post3', countLike: 11},
        {id: 4, body: 'Post4', countLike: 17},
        {id: 5, body: 'Post5', countLike: 8},
        {id: 6, body: 'Post6', countLike: 18},
    ]
    let postsItems = postsFromServer
        .map(postsItem => <PublishedPost body={postsItem.body} countLike={postsItem.countLike}/>)
  return (
        <div>
            {postsItems}
        </div>
  )
}

export default PublishedPosts;