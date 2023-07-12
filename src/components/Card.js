function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="element__card" key={props.id}>
      <img src={props.link} className="element__card-image" alt={props.name} onClick={handleClick} />
      <button className="element__delete-btn" aria-label="Удалить" type="button"></button>
        <div className="element__title-container">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__like-container">
            <button className="element__like-btn" aria-label="Нравится" type="button"></button>
            <p className="element__like-counter"></p>
          </div>
        </div>
    </li>
  )
};

export default Card;