import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";
import editPng from "../images/edit-img.png";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  cards,
  handleCardLike,
  handleCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div>
          <img
            src={currentUser.avatar}
            alt="Current user"
            className="profile__avatar"
            onClick={onEditAvatarClick}
          />
          <img src={editPng} alt="Edit" className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__info-edit" onClick={onEditProfileClick} />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlaceClick} />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
