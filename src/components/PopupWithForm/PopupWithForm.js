import React, { useRef, useEffect } from 'react';


export default function PopupWithForm({ isOpen, onClose, title, handleSubmit, children, handleDisableScroll }) {

  const popupBackgroundRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      //Останавливаем всплытие
      event.stopImmediatePropagation();
      if (!popupBackgroundRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleKeydown(event) {
      if (event.code === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKeydown);
      handleDisableScroll(true);

    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeydown);
      handleDisableScroll(false);
    };
   })

  return (
    <div
      className={`PopupWithForm__background ${isOpen && 'PopupWithForm__background_open'}`}
    >
      <div className={`PopupWithForm ${isOpen && 'PopupWithForm_open'}`}
        ref={popupBackgroundRef}>
        <button
          className='PopupWithForm__close'
          onClick={onClose}>
        </button>
        <form
          className='PopupWithForm__form'
          onSubmit={handleSubmit}>
            <h2 className='PopupWithForm__title'>{title}</h2>
            {children}
        </form>
      </div>
    </div>
  );
}
