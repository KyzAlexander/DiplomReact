import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header>
      <nav className='header'>
        <div className='header__wrapperLogoAndTitle'>
          <a
            className='wrapperLogoAndTitle__logo'
            href='http://localhost:3000/#'
          >
            <img src={logo} alt='site logo'></img>
          </a>
          <h1 className='wrapperLogoAndTitle__title'>Git Fake Alex</h1>
        </div>
        <div className='header__wrapperInput'>
          <input className='wrapperInput__textField'></input>
        </div>
      </nav>
    </header>
  );
}

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
