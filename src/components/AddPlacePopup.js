import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: title,
      link,
    });
  }

  React.useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="New place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Create"
    >
      <input
        type="text"
        className="modal__input modal__input_field_title"
        id="card-title-input"
        placeholder="Title"
        name="title"
        minLength="1"
        maxLength="30"
        required
        onChange={handleTitleChange}
        value={title || ""}
      />
      <span id="card-title-input-error" className="modal__error-text"></span>
      <input
        type="url"
        className="modal__input modal__input_field_image-link"
        id="card-input-link"
        placeholder="Image link"
        name="link"
        required
        onChange={handleLinkChange}
        value={link || ""}
      />
      <span id="card-input-link-error" className="modal__error-text"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
