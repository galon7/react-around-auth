import React from "react";
import { Link } from "react-router-dom";

function Form({ onSubmit, text, message, link }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form action="#" onSubmit={onSubmit} className="form">
        <h1 className="form__header">{text}</h1>
        <input
          type="text"
          className="form__input"
          placeholder="Email"
          name="email"
          minLength={2}
          maxLength={50}
          required
          onChange={handleEmailChange}
          value={email || ""}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Password"
          name="password"
          minLength={2}
          maxLength={50}
          required
          onChange={handlePasswordChange}
          value={password || ""}
        />
        <button type="submit" className="form__button">
          {text}
        </button>
        <Link to={link} className="form__text">
          {message}
        </Link>
      </form>
    </div>
  );
}

export default Form;
