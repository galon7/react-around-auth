import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `${
    isOwn ? "elements__delete-button_visible" : "elements__delete-button_hidden"
  }`;

  // Check if the card was liked by the current user
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `${isLiked ? "elements__like-button_pressed" : ""}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__item">
      <img src={card.link} alt={card.name} className="elements__img" onClick={handleClick} />
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
      <div className="elements__content">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__likes">
          <button
            type="button"
            className={`elements__like-button ${cardLikeButtonClassName}`}
            onClick={handleLikeClick}
          />
          <p className="elements__like-number">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
