import React from "react";
import Form from "./Form";

function Register({ handleRegister }) {
  return (
    <Form
      handleSubmit={handleRegister}
      text="Sign up"
      message="Already a member? Log in here!"
      link="/signin"
    />
  );
}

export default Register;
