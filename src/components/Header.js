import React from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, checkUserLogin }) {
  checkUserLogin();

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <p className="header__email">{isLoggedIn}</p> : ""}
        <Link to="/signin" className="header__link">
          {isLoggedIn ? "Log out" : "Log in"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
