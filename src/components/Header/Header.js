import {Route, Switch} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header({ isMenuOpen, onOpenMenu, onClose, onLoginPopupOpen, loggedIn, handleLogout }) {
  return (
    <Switch>
      <Route path='/saved-news'>
        <header className='Header Header_light'>
          <div className={`Header__logo ${!isMenuOpen && 'Header__logo_light'}`}>
            NewsEexplorer
          </div>
          <Navigation
            isMenuOpen={isMenuOpen}
            onOpenMenu={onOpenMenu}
            onClose={onClose}
            onLoginPopupOpen={onLoginPopupOpen}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
          />
        </header>
      </Route>

      <Route path='/'>
        <header className='Header'>
          <div className='Header__logo'>
            NewsEexplorer
          </div>
          <Navigation
            isMenuOpen={isMenuOpen}
            onOpenMenu={onOpenMenu}
            onClose={onClose}
            onLoginPopupOpen={onLoginPopupOpen}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
          />
        </header>
      </Route>
    </Switch>
  );
}
