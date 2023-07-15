import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props) {

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      id='add-popup'
      title='Новое место'
      name='addPopup'
      buttonText='Создать'
    >
      <>
        <label htmlFor="title-input" className="popup__label">
          <input id="title-input" className="popup__input popup__input_data_title" minLength="2" maxLength="30" name="placeTitle" placeholder="Название" required />
          <span className="title-input-error popup__input-error"></span>
        </label>
        <label htmlFor="url-input" className="popup__label">
          <input id="url-input" className="popup__input popup__input_data_url" type="url" name="placeUrl" placeholder="Ссылка на картинку" required />
          <span className="url-input-error popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
};

export default PopupAddCard;