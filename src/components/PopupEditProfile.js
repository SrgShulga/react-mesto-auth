import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      id='edit-popup'
      title='Редактировать профиль'
      name='profileEdit'>
      <>
        <label htmlFor="username-input" className="popup__label">
          <input id="username-input" className="popup__input popup__input_data_name" minLength="2" maxLength="40" name="userName" placeholder="Имя" required />
          <span className="username-input-error popup__input-error"></span>
        </label>
        <label htmlFor="description-input" className="popup__label">
          <input id="description-input" className="popup__input popup__input_data_description" minLength="2" maxLength="200" name="userDescription" placeholder="О себе" required />
          <span className="description-input-error popup__input-error"></span>
        </label>
      </>
    </PopupWithForm>
  )
};

export default PopupEditProfile;