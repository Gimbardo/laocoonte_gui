import React from 'react';
import Style from './Logo.module.css'
import logo from "../images/Laocoon.png"

export default function Logo() {
  return (
    <strong><a href="/">
      <img src={logo} alt="logo" className={Style.logo}/>
    </a></strong>)
}
