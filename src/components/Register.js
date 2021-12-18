import React, { useState } from "react";
import Form from "./Form";
import InfoTooltip from "./InfoTooltip";

function Register({ handleRegister }) {
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function openPopup() {
    setIsInfoTooltipOpen(true);
  }

  function setTooltip(status) {
    setSuccessMessage(status ? true : false);
  }

  return (
    <>
      <Form
        handleRegister={handleRegister}
        text="Sign up"
        message="Already a member? Log in here!"
        link="/signin"
        openPopup={openPopup}
        setTooltip={setTooltip}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
        successMessage={successMessage}
      />
    </>
  );
}

export default Register;
