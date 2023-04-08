import React from "react";
import style from './Bio.module.css'
import AboutBio from "./AboutBio/AboutBio";




const Bio = (props) => {
    return (
        <div>
            <div>
                <img
                    className={style.img}
                    src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"
                />
            </div>
            <AboutBio />
        </div>
    )
}

export default Bio;