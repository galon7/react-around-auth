import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn, userEmail, setUserEmail, setToken }) {
  const [linkText, setLinkText] = useState("");
  const navigate = useNavigate();
  let path = window.location.pathname;

  useEffect(() => {
    if (path === "/signup") setLinkText("Log in");
    else if (path === "/signin") setLinkText("Sign up");
    else setLinkText("Log out");
  }, [path]);

  function handleHeaderClick() {
    if (isLoggedIn) {
      setUserEmail("");
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      setToken(null);
      navigate("/signin");
    }
  }

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <p className="header__email">{userEmail}</p> : ""}
        <Link
          to={path === "/signin" ? "/signup" : "/signin"}
          className="header__link"
          onClick={handleHeaderClick}
        >
          {linkText}
        </Link>
      </div>
    </header>
  );
}

export default Header;
