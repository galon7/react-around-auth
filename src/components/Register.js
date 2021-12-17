import React, { useState } from "react";
import Form from "./Form";
import InfoTooltip from "./InfoTooltip";

function Register() {
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsInfoTooltipOpen(true);
  }

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        text="Sign up"
        message="Already a member? Log in here!"
        link="/signin"
      />

      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closePopup} successMessage={true} />
    </>
  );
}

export default Register;
