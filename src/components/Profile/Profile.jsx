import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
      <div>
        <ProfileInfo />
        <Posts state={props.state.postsFromServer}/>
      </div>
  )
}

export default Profile;