import React from "react";
import style from './Header.module.css'


const Header = () => {
  return (
      <header className={`${style.header} b1`}>
        <div className={style.wrapper}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcIjkS2U1pdEQanZ2ngPyBJqCVQp-3Cv7Ng&usqp=CAU"
            className={style.logo}
          />
          <p>Search input</p>
        </div>
      </header>
  )
}

export default Header;