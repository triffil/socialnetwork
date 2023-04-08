import style from './AboutBio.module.css';
import React from "react";

const AboutBio = (props) => {
    return (
        <div className={`${style.profile} mt-20 mb-20`}>
            <img
                className={style.logo}
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            />
            <div>
                <ul className={style.infoList}>
                    <li>Dmitry K.</li>
                    <li>Date of birth: 2 january</li>
                    <li>City: Minsk</li>
                    <li>Education: BSU'11</li>
                    <li>Web Site: google.com</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutBio;