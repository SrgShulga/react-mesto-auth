function PopupWithForm(props) {
  return (
    <>
    <div className={`popup ${ props.isOpen? 'popup_opened' : '' }`} id={ `${props.id }-popup`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${ props.title }`}</h2>
        <form className="popup__form" name={`${ props.name }`} noValidate>
          { props.children }
          <button className="popup__submit-btn" type="submit" aria-label="Сохранить">{ props.buttonText || 'Сохранить'}</button>
        </form>
        <button className="popup__close-btn" aria-label="Закрыть" type="button" onClick = {props.onClose}></button>
      </div>
    </div>
    </>
  )
};

export default PopupWithForm;