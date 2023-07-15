import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props) {

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      id='avatar-popuup'
      title='Обновить аватар'
      name='avatarEdit'
    >
      <label htmlFor="avatar-input" className="popup__label">
        <input id="avatar-input" className="popup__input popup__input_data_url" type="url" name="avatarUrl" placeholder="Cсылка на фото профиля" required />
        <span className="avatar-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
};

export default PopupEditAvatar;