import React, { useCallback } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
// import useDebounce from "../../hooks/useDebounce";

function Header(props) {
  //!!!! с этим не работает
  // const { onSearch } = props;
  // const handleSearchChange = useCallback(
  //   (event) => {
  //     onSearch?.(event.target.value);
  //   },
  //   [onSearch]
  // );
  // const handleSearchChangeDebounser = useDebounce(handleSearchChange, 500);
  return (
    <header>
      <nav className="header">
        <div className="header__wrapperLogoAndTitle">
          <a
            className="wrapperLogoAndTitle__logo"
            href="http://localhost:3000/#"
          >
            <img src={logo} alt="site logo"></img>
          </a>
          {/* <h1 className='wrapperLogoAndTitle__title'>Git Fake Alex</h1> */}
        </div>
        <div className="header__wrapperInput">
          <input
            className="wrapperInput__textField"
            type="search"
            // onChange={handleSearchChangeDebounser}
          ></input>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
