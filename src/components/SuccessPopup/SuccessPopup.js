import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function SuccessPopup({ isOpen, onClose, onLoginPopupOpen, handleDisableScroll }) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleLoginPopupOpen() {
    onClose();
    onLoginPopupOpen();
  }

  return (
    <PopupWithForm
      name='Success'
      title='Пользователь успешно зарегистрирован!'
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      handleDisableScroll={handleDisableScroll}
      >
        <span className='SuccessPopup__login_link' onClick={handleLoginPopupOpen}>Войти</span>
    </PopupWithForm>
  );
}
