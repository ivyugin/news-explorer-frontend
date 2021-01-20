import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import SigninPopup from '../SigninPopup/SigninPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState();
  const [isSigninPopupOpen, setSigninPopupOpen] = React.useState();
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState();
  const [isDisablePageScroll, setIsDisablePageScroll] = React.useState(false);

  function handelMenuOpen(argument) {
    setIsMenuOpen(true);
  }

  function handelLoginPopupOpen() {
    setIsLoginPopupOpen(true);
  }

  function handleSigninPopupOpen() {
    setSigninPopupOpen(true);
  }

  function handleSuccessPopupOpen() {
    setIsSuccessPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuOpen(false);
    setIsLoginPopupOpen(false);
    setSigninPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }

  function handleDisableScroll(disableScroll) {
    disableScroll
      ? setIsDisablePageScroll(true)
      : setIsDisablePageScroll(false)
  }

  return (
    <div className='App'>
      <div className={`App__page ${isDisablePageScroll && 'App__page_disableScroll'}`}>
        <Switch>
          <Route path='/saved-news'>
            <Header
              isMenuOpen={isMenuOpen}
              onOpenMenu={handelMenuOpen}
              onClose={closeAllPopups}
              onLoginPopupOpen={handelLoginPopupOpen}
            />
            <SavedNews/>
            <Footer/>
          </Route>
          <Route path='/'>
            <Header
              isMenuOpen={isMenuOpen}
              onOpenMenu={handelMenuOpen}
              onClose={closeAllPopups}
              onLoginPopupOpen={handelLoginPopupOpen}
            />
            <Main/>
            <Footer/>
          </Route>
        </Switch>
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onSigninOpen={handleSigninPopupOpen}
          handleDisableScroll={handleDisableScroll}
        />
        <SigninPopup
          isOpen={isSigninPopupOpen}
          onClose={closeAllPopups}
          onLoginPopupOpen={handelLoginPopupOpen}
          onSigninPopupOpen={handleSuccessPopupOpen}
          handleDisableScroll={handleDisableScroll}
        />
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          onLoginPopupOpen={handelLoginPopupOpen}
          handleDisableScroll={handleDisableScroll}
        />
      </div>
    </div>
  );
}

export default App;
