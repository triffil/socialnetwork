import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
      <nav className={`${style.nav} b1`}>
        <ul className={style.list}>
          <li>
            <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
          </li>
          <li>
            <NavLink to='/news' className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
          </li>
          <li>
            <NavLink to='/music' className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
          </li>
          <li>
            <NavLink to='/settings' className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;