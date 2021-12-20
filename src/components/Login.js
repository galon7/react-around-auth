import React from "react";
import Form from "./Form";

function Login({ handleSignIn }) {
  return (
    <Form
      text="Login"
      message="Not a member yet? Sign up here!"
      link="/signup"
      handleSubmit={handleSignIn}
    />
  );
}

export default Login;
