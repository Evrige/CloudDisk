import React from 'react'
import './navbar.scss'
import Logo from "../../assets/logo.svg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <img src={Logo} alt="" className='navbar__logo'/>
        <div className="navbar__header">Mern Cloud</div>  
        <div className="navbar__login"><NavLink to="/Login">Войти</NavLink></div>
        <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar;