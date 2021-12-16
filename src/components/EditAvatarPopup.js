import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Change profile picture"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
    >
      <input
        type="url"
        className="modal__input modal__input_field_profile-picture-link"
        id="profile-picture-link"
        placeholder="Profile picture link"
        name="avatar"
        required
        ref={inputRef}
      />
      <span id="profile-picture-link-error" className="modal__error-text"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
