import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import InfoTooltip from "./InfoTooltip";

import { register, login, checkToken } from "../utils/auth";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function openTooltip() {
    setIsInfoTooltipOpen(true);
  }

  function setTooltip(status) {
    setSuccessMessage(status ? true : false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(userNew) {
    api
      .editProfile(userNew)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleUpdateAvatar(newUrl) {
    api
      .updateAvatar(newUrl)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleAddPlaceSubmit(place) {
    api
      .addCardApi(place)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleRegister(password, email) {
    register(password, email)
      .then((res) => {
        if (res.status === 201) {
          setTooltip(true);
          navigate("/signin");
        }
        if (res.status === 400) {
          setTooltip(false);
        }
      })
      .catch((err) => {
        console.log(`Error.....: ${err}`);
        setTooltip(false);
      })
      .finally(openTooltip());
  }

  function handleSignIn(password, email) {
    login(password, email)
      .then((data) => {
        localStorage.setItem("token", data.token);
        currentUser.email = email;
        navigate("/");
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function checkUserLogin() {
    checkToken()
      .then((data) => {
        if (data.data) currentUser.email = data.data.email;
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header checkUserLogin={checkUserLogin} />
          <Routes>
            <Route path="/signin" element={<Login handleSignIn={handleSignIn} />} />
            <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute isLoggedIn={currentUser.email}>
                  <Main
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onEditAvatarClick={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onClose={closeAllPopups}
                    cards={cards}
                    handleCardLike={handleCardLike}
                    handleCardDelete={handleCardDelete}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />

          <EditProfilePopup
            name="edit-profile"
            title="Edit Profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            successMessage={successMessage}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
