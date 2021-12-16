import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`modal modal_img ${isOpen && "modal_open"}`}>
      <div className="modal__container-img">
        <button type="button" className="modal__close" onClick={onClose} />
        <figure className="modal__figure">
          <img src={card ? card.link : {}} alt="Selected card" className="modal__image" />
          <figcaption className="modal__caption">{card ? card.name.toString() : ""}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
