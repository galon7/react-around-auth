import React from "react";
import success from "../images/success.svg";
import oops from "../images/oops.svg";

function InfoTooltip({ isOpen, onClose, successMessage }) {
  console.log(success);
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__container modal__infotooltip">
        <button type="button" className="modal__close" onClick={onClose} />
        <img src={successMessage ? success : oops} width="120" height="120" />
        <p style={{ marginTop: 32 }}>
          {successMessage
            ? "Success! You have now been registered."
            : "Oops, something went wrong! Please try again."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
