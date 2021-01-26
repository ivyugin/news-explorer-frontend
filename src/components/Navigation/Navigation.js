import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';

export default function Navigation({ isMenuOpen, onOpenMenu, onClose, onLoginPopupOpen, loggedIn, handleLogout }) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleLoginPopupOpen() {
    if (loggedIn) {
      MainApi.logout()
        .then((res) => {

          handleLogout();
        })
        .catch(err => console.log(err))

    } else {
      onClose();
      onLoginPopupOpen();
    }

  }

  return (
    <div className='Navigation'>
      <Switch>

        <Route path='/saved-news'>
          <div className={`Navigation__menu ${isMenuOpen && 'Navigation__menu-open'}`}>
            <hr className={`Navigation__brline ${isMenuOpen && 'Navigation__brline_open'}`} />
            <Link
              to="./"
              onClick={onClose}
              className={`Navigation__link ${!isMenuOpen && 'Navigation__link_light'}`}>
              Главная
            </Link>
            <Link
              to="./saved-news"
              onClick={onClose}
              className={`Navigation__link Navigation__link_activ ${!isMenuOpen && 'Navigation__link_light'}`}>
              Сохранённые статьи
            </Link>
            <button
              className={`Navigation__button Navigation__button_logout_light ${!isMenuOpen && 'Navigation__button_light'}`}
              onClick={handleLoginPopupOpen}>
              {currentUser.name}
            </button>
          </div>
          <button
            className='Navigation__openMenu Navigation__openMenu_dark'
            onClick={onOpenMenu}>
          </button>
          <button
            className={`Navigation__closeMenu ${isMenuOpen && 'Navigation__closeMenu-open'}`}
            onClick={onClose}>
          </button>
        </Route>

        <Route path='/'>
          <div className={`Navigation__menu ${isMenuOpen && 'Navigation__menu-open'}`}>
            <hr className={`Navigation__brline ${isMenuOpen && 'Navigation__brline_open'}`} />
            <Link
              to="./"
              onClick={onClose}
              className='Navigation__link Navigation__link_activ'>
              Главная
            </Link>
            <Link
              to="./saved-news"
              onClick={onClose}
              className={`Navigation__link ${!loggedIn && 'Navigation__link_hide'}`}>
              Сохранённые статьи
            </Link>
            <button
              className={`Navigation__button ${loggedIn && 'Navigation__button_logout_dark'}`}
              onClick={handleLoginPopupOpen}>
              {loggedIn ? currentUser.name : 'Авторизоваться'}
            </button>
          </div>
          <button
            className='Navigation__openMenu'
            onClick={onOpenMenu}>
          </button>
          <button
            className={`Navigation__closeMenu ${isMenuOpen && 'Navigation__closeMenu-open'}`}
            onClick={onClose}>
          </button>
        </Route>
      </Switch>
    </div>
  );
}
