import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  // After loading the current user from the API
  // their data will be used in managed components.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
    >
      <input
        type="text"
        className="modal__input modal__input_field_name"
        id="name-input"
        placeholder="Full name"
        name={name}
        minLength={2}
        maxLength={40}
        required
        onChange={handleNameChange}
        value={name || ""}
      />
      <span id="name-input-error" className="modal__error-text" />
      <input
        type="text"
        className="modal__input modal__input_field_profession"
        id="profession-input"
        placeholder="Description"
        name={description}
        minLength={2}
        maxLength={200}
        required
        onChange={handleDescChange}
        value={description || ""}
      />
      <span id="profession-input-error" className="modal__error-text" />
    </PopupWithForm>
  );
}
export default EditProfilePopup;
