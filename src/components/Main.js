import { useEffect, useState } from "react";
import { apiRequest } from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([apiRequest.getUserInfo(), apiRequest.getInitialCards()])
      .then(([userInfo, cardElement]) => {
        setUserName(userInfo.name)
        setUserDescription(userInfo.about)
        setUserAvatar(userInfo.avatar)
        setCards(cardElement)
      })
      .catch((err) => console.log(`Возникла ошибка при получении данных с сервера: ${err}`))
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} className="profile__avatar" alt="Изображение профиля" />
          <button className="profile__avatar-edit" type="button" aria-label="Редактировать фото профиля" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-btn" aria-label="Редактировать профиль" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-btn" aria-label="Добавить фото" type="button" onClick={props.onAddCard}></button>
      </section>
      <section className="elements-container">
        <ul className="element">
          {cards.map((card) => (
            <Card
              link={card.link}
              name={card.name}
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
              likes={card.likes.length}
            />
          ))}
        </ul>
      </section>
    </main>
  )
};

export default Main;

