import {Route, Switch, Link} from 'react-router-dom';

export default function Navigation({ isMenuOpen, onOpenMenu, onClose, onLoginPopupOpen }) {

  function handleLoginPopupOpen() {
    onClose();
    onLoginPopupOpen();
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
              className={`Navigation__button ${!isMenuOpen && 'Navigation__button_light'}`}
              onClick={handleLoginPopupOpen}>
              Авторизоваться
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
              className='Navigation__link'>
              Сохранённые статьи
            </Link>
            <button
              className='Navigation__button'
              onClick={handleLoginPopupOpen}>
              Авторизоваться
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
