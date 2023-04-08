import React from "react";
import style from './ProfileInfo.module.css'
import Bio from "./Bio/Bio";




const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    className={style.img}
                    src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"
                />
            </div>
            <Bio />
        </div>
    )
}

export default ProfileInfo;