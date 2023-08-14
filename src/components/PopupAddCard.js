import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props) {

  const cardName = useRef();
  const cardLink = useRef();

  useEffect(() => {
    cardName.current.value = '';
    cardLink.current.value = ''
  }, [props.isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onAddCard({
      name: cardName.current.value,
      link: cardLink.current.value
    })
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      id='add-popup'
      title='Новое место'
      name='addPopup'
      buttonText='Создать'
    >
      <>
        <label htmlFor="title-input" className="popup__label">
          <input id="title-input" ref={cardName} className="popup__input popup__input_data_title" minLength="2" maxLength="30" name="placeTitle" placeholder="Название" required />
          <span className="title-input-error popup__input-error"></span>
        </label>
        <label htmlFor="url-input" className="popup__label">
          <input id="url-input" ref={cardLink} className="popup__input popup__input_data_url" type="url" name="placeUrl" placeholder="Ссылка на картинку" required />
          <span className="url-input-error popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
};

export default PopupAddCard;