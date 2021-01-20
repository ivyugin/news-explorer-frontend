import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup({ isOpen, onClose, onSigninOpen, handleDisableScroll }) {
  const [isFormValid, setIsFormValid] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [isEmailError, setIsEmailError] = React.useState();
  const [emailError, setEmailError] = React.useState();

  function onChangeEmail(e) {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError('');
      setIsEmailError(false);
    } else {
      setEmailError(e.target.validationMessage);
      setIsEmailError(true);
    }
  }

  const [password, setPassword] = React.useState();
  const [isPasswordError, setIsPasswordError] = React.useState();
  const [PasswordError, setPasswordError] = React.useState();

  function onChangePassword(e) {
    setPassword(e.target.value);
    if (e.target.validity.valid) {
      setPasswordError('');
      setIsPasswordError(false);
    } else {
      setPasswordError(e.target.validationMessage);
      setIsPasswordError(true);
    }
  }

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setPasswordError('');
    setIsPasswordError(true);
    setEmailError('');
    setIsEmailError(true);
    setIsFormValid(false);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isEmailError && !isPasswordError) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailError, isPasswordError, isFormValid]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSinginPopupOpen() {
    onClose();
    onSigninOpen();
  }

  return (
    <PopupWithForm
      name='edit'
      title='Вход'
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      handleDisableScroll={handleDisableScroll}
      >
        <div className='PopupWithForm__inputControl'>
          <span className='PopupWithForm__inputName'>Email</span>
          <input
            className='PopupWithForm__input'
            value={email || ''}
            placeholder='Введите почту'
            name='email'
            required
            type='email'
            minLength='2'
            maxLength='40'
            onChange={onChangeEmail}
          />
          <span className={`PopupWithForm__error ${isEmailError && 'PopupWithForm__error_active'}`}>{emailError}</span>
        </div>
        <div className='PopupWithForm__inputControl'>
          <span className='PopupWithForm__inputName'>Пароль</span>
          <input
            className='PopupWithForm__input'
            value={password || ''}
            placeholder='Введите пароль'
            name='password'
            required
            type='password'
            minLength='2'
            maxLength='40'
            onChange={onChangePassword}
          />
          <span className={`PopupWithForm__error ${isPasswordError && 'PopupWithForm__error_active'}`}>{PasswordError}</span>
        </div>
        <button className={`PopupWithForm__submitButton ${isFormValid && 'PopupWithForm__submitButton_active'}`}>
          Войти
        </button>
        <p className='PopupWithForm__signin'>
          или <span className='PopupWithForm__signin_link' onClick={handleSinginPopupOpen}>Зарегистрироваться</span>
        </p>
    </PopupWithForm>
  );
}
