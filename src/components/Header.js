import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ checkUserLogin, userEmail, setUserEmail }) {
  checkUserLogin();
  const navigate = useNavigate();

  function handleHeaderClick() {
    if (userEmail) {
      setUserEmail("");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {userEmail ? <p className="header__email">{userEmail}</p> : ""}
        <Link to="/signin" className="header__link" onClick={handleHeaderClick}>
          {userEmail ? "Log out" : "Log in"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
