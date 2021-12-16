import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, onSubmit, children, buttonText }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen && "modal_open"}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form action="#" onSubmit={onSubmit} className="modal__form" name={`${name}-form`}>
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
