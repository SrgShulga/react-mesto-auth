import { useState } from "react"

function Login(props) {

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
    props.handleLogin(formValue.email, formValue.password);
    setFormValue('');
  }

  return (
    <div className="auth">
      <h3 className="auth__title">Вход</h3>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label htmlFor="email-input" className="auth__label">
          <input id="email-input" type="email" onChange={handleChange} value={formValue.email || ''} className="auth__input" name="email" placeholder="Email" required />
          <span className="auth__input-error auth__input-error_email" />
        </label>
        <label htmlFor="password-input" className="auth__label">
          <input id="password-input" type="password" onChange={handleChange} value={formValue.password || ''} className="auth__input" name="password" placeholder="Пароль" minLength='6' required />
          <span className="auth__input-error auth__input-error_password" />
        </label>
        <button type="submit" className="auth__submit-btn" aria-label='Зарегестрироваться'>Войти</button>
      </form>
    </div>
  )
}

export default Login;