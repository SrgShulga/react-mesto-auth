import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithImage from "./PopupWithImage";
import PopupEditProfile from "./PopupEditProfile";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupAddCard from "./PopupAddCard";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfileOpen(true)
  }
  function handleAddCardClick() {
    setIsAddCardPopupOpen(true)
  }

  function handleCardClick (card) {
    setImagePopupOpen(true)
    setSelectedCard({
      name: card.name,
      link: card.link
    })
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddCardPopupOpen(false)
    setImagePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onEditAvatar = {handleEditAvatarClick}
        onAddCard = {handleAddCardClick}
        onCardClick = {handleCardClick}
        
      />
      <Footer />
      <PopupEditProfile 
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      />
      <PopupEditAvatar
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      />
      <PopupAddCard
        isOpen = {isAddCardPopupOpen}
        onClose = {closeAllPopups}
      />
      <PopupWithImage
        isOpen = {isImagePopupOpen}
        onClose = {closeAllPopups}
        card = {selectedCard}
        />
    </div>
  )
}

export default App;
