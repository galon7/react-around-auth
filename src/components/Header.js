import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Header({ checkUserLogin }) {
  const currentUser = React.useContext(CurrentUserContext);
  checkUserLogin();
  const navigate = useNavigate();

  function handleHeaderClick() {
    if (currentUser.email) {
      currentUser.email = "";
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  return (
    <header className="header">
      <div className="header__vector" />
      <div style={{ display: "flex" }}>
        {currentUser.email ? <p className="header__email">{currentUser.email}</p> : ""}
        <Link to="/signin" className="header__link" onClick={handleHeaderClick}>
          {currentUser.email ? "Log out" : "Log in"}
        </Link>
      </div>
    </header>
  );
}

export default Header;
