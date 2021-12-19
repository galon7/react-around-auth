import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setLoggedIn, checkUserLogin }) {
  checkUserLogin();
  const navigate = useNavigate();

  function handleHeaderClick() {
    if (isLoggedIn) {
      setLoggedIn("");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <p className="header__email">{isLoggedIn}</p> : ""}
        <Link to="/signin" className="header__link" onClick={handleHeaderClick}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
