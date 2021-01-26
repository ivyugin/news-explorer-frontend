import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as MainApi from '../../utils/MainApi';

export default function SigninPopup({ isOpen, onClose, onLoginPopupOpen, onSigninPopupOpen, handleDisableScroll }) {
  const [isFormValid, setIsFormValid] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [isEmailError, setIsEmailError] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [serverError, setServerError] = React.useState();

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

  const [name, setName] = React.useState();
  const [isNameError, setIsNameError] = React.useState();
  const [NameError, setNameError] = React.useState();

  function onChangeName(e) {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError('');
      setIsNameError(false);
    } else {
      setNameError(e.target.validationMessage);
      setIsNameError(true);
    }
  }

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');

    setPasswordError('');
    setIsPasswordError(true);

    setEmailError('');
    setIsEmailError(true);

    setNameError('');
    setIsNameError(true);

    setIsFormValid(false);

    setServerError('');
  }, [isOpen]);

  React.useEffect(() => {
    if (!isEmailError && !isPasswordError && !isNameError) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailError, isPasswordError, isNameError]);

  function handleSubmit(e) {
    e.preventDefault();
    MainApi.register(email, password, name)
      .then((res) => {
          if (res.ok) {
            onClose();
            onSigninPopupOpen();
          } else {
            res.status === 409
              ? setServerError('Такой пользователь уже есть')
              : setServerError('На сервере произошла ошибка')
          }

      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLoginPopupOpen() {
    onClose();
    onLoginPopupOpen();
  }

  return (
    <PopupWithForm
      name='edit'
      title='Регистрация'
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
        <div className='PopupWithForm__inputControl'>
          <span className='PopupWithForm__inputName'>Имя</span>
          <input
            className='PopupWithForm__input'
            value={name || ''}
            placeholder='Введите своё имя'
            name='name'
            required
            type='text'
            minLength='2'
            maxLength='40'
            onChange={onChangeName}
          />
          <span className={`PopupWithForm__error ${isNameError && 'PopupWithForm__error_active'}`}>{NameError}</span>
        </div>
        <p className='PopupWithForm__serverError'>{serverError}</p>
        <button className={`PopupWithForm__submitButton ${isFormValid && 'PopupWithForm__submitButton_active'}`}>
          Зарегистрироваться
        </button>
        <p className='PopupWithForm__signin'>или <span className='PopupWithForm__signin_link' onClick={handleLoginPopupOpen}>Войти</span></p>
    </PopupWithForm>
  );
}
