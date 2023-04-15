import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
      <div>
        <ProfileInfo />
        <Posts state={props.state.postsFromServer}
               newPostText={props.state.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
      </div>
  )
}

export default Profile;