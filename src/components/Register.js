import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleRegister(formValue.email, formValue.password)
    setFormValue('')
  }

  return (
    <div className="auth">
      <h3 className="auth__title">Регистрация</h3>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label htmlFor="email-input" className="auth__label">
          <input id="email-input" type="email" onChange={handleChange} value={formValue.email || ''} className="auth__input" name="email" placeholder="Email" minLength='8' maxLength='40' required />
          <span className="auth__input-error auth__input-error_email" />
        </label>
        <label htmlFor="password-input" className="auth__label">
          <input id="password-input" type="password" onChange={handleChange} value={formValue.password || ''} className="auth__input" name="password" placeholder="Пароль" minLength='6' maxLength='18' required />
          <span className="auth__input-error auth__input-error_password" />
        </label>
        <button type="submit" className="auth__submit-btn" aria-label='Зарегестрироваться'>Зарегистрироваться</button>
      </form>
      <div className="auth__signin">
        <p>Уже зарегистрированы?</p>
        <Link to='/sign-in' className="auth__link">Войти</Link>
      </div>
    </div>
  )
}

export default Register;