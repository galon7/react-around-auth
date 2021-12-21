import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn, userEmail, setUserEmail }) {
  const navigate = useNavigate();

  function handleHeaderClick() {
    if (isLoggedIn) {
      setUserEmail("");
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <p className="header__email">{userEmail}</p> : ""}
        <Link to="/signin" className="header__link" onClick={handleHeaderClick}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
