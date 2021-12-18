import React from "react";
import Form from "./Form";

function Login({ handleSignIn }) {
  return (
    <Form
      onSubmit="onSubmit"
      text="Login"
      message="Not a member yet? Sign up here!"
      link="/signup"
      handleSignIn={handleSignIn}
    />
  );
}

export default Login;
