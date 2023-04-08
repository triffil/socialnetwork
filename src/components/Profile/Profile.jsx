import React from "react";
import Posts from "./Posts/Posts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
      <div>
        <ProfileInfo />
        <Posts />
      </div>
  )
}

export default Profile;