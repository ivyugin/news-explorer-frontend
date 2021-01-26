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

import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as MainApi from '../../utils/MainApi';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [foundArticles, setFoundArticles] = React.useState();

  const [searching, setSearching] = React.useState();
  const [isErrorSearch, setIsErrorSearch] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState();
  const [savedArticles, setSavedArticles] = React.useState();

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

  function handleLogin() {
    setLoggedIn(true);

    MainApi.getUserInfo()
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject();
        }
      })
      .then(res => {
        setCurrentUser({email: res.email, name: res.name});
      })
  }

  function handleLogout() {
    setLoggedIn(false);
    setCurrentUser({});
  }

  function handleStartSearching() {
    setSearching(true);
  }

  function handleFoundArticles(articles) {
    setIsErrorSearch(false);
    localStorage.setItem('articles', JSON.stringify(articles));
    localStorage.setItem('searchQuery', searchQuery);
    setFoundArticles(articles);
    setSearching(false);
  }

  function handleSearchError() {
    setFoundArticles([]);
    setSearching(false);
    setIsErrorSearch(true);
  }

  function handleDeleteArticle(cardID) {
    MainApi.deleteArticles(cardID)
      .then((res) => {
        const newCards = savedArticles.filter(c => c._id !== cardID);
        setSavedArticles(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSaveCard(card) {
    MainApi.saveArticle({
        keyword: localStorage.getItem('searchQuery'),
        title: card.title,
        text: card.description,
        date: card.publishedAt,
        source: card.source.name,
        link: card.url,
        image: card.urlToImage
      })
      .then((res) => {
        if (res._id) {
          setSavedArticles([...savedArticles, res]);
        }

      })
      .catch(err => console.log(err));
      }

  React.useEffect(() => {
    const articlesFromStorage = JSON.parse(localStorage.getItem('articles'));
    if(articlesFromStorage) {
      articlesFromStorage.length > 0 && setFoundArticles(articlesFromStorage);
    }
  }, [])

  React.useEffect(() => {
    MainApi.getUserInfo()
      .then(res => {
        if (res.ok) {
          setLoggedIn(true);
          return res.json()
        } else {
          return Promise.reject();
        }
      })
      .then(res => {
        setCurrentUser({email: res.email, name: res.name});
      })
  }, [])

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getArticles()
      .then(res => {
        setSavedArticles(res);
      })
    }
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='App'>
      <div className={`App__page ${isDisablePageScroll && 'App__page_disableScroll'}`}>
        <Header
          isMenuOpen={isMenuOpen}
          onOpenMenu={handelMenuOpen}
          onClose={closeAllPopups}
          onLoginPopupOpen={handelLoginPopupOpen}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        <Switch>
          <ProtectedRoute
            path='/saved-news'
            loggedIn={loggedIn}
            savedArticles={savedArticles}
            handleDeleteArticle={handleDeleteArticle}
            handleSaveCard={handleSaveCard}
            component={SavedNews}>
          </ProtectedRoute>
          <Route path='/'>
            <Main
              foundArticles={foundArticles}
              handleFoundArticles={handleFoundArticles}
              handleSearchError={handleSearchError}
              handleStartSearching={handleStartSearching}
              searching={searching}
              isErrorSearch={isErrorSearch}
              loggedIn={loggedIn}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSaveCard={handleSaveCard}
              savedArticles={savedArticles}
              handleDeleteArticle={handleDeleteArticle}
            />
          </Route>
        </Switch>
        <Footer/>
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onSigninOpen={handleSigninPopupOpen}
          handleDisableScroll={handleDisableScroll}
          handleLogin={handleLogin}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
