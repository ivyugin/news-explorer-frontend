import React from 'react';
import {Route, Switch} from 'react-router-dom';
import dateFormat from 'dateformat';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

dateFormat.i18n = {
  monthNames: [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ]
};

export default function NewsCard({ card, handleDeleteArticle, handleSaveCard, savedArticles }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = React.useState();
  const [cardID, setCardID] = React.useState();

  React.useEffect(() => {
    if (savedArticles) {
      savedArticles.forEach(article => {
        if (article.link === card.url) {
          setIsSaved(true);
          setCardID(article._id)
        }
      })
    }

  }, [card, savedArticles])

  function handleSaveArticle() {
    if (currentUser.email) {
      handleSaveCard(card);
      setIsSaved(true);
    }
  }

  function onDeleteArticle() {
    handleDeleteArticle(card._id || cardID);
    setIsSaved(false);
  }

  function onButtonClick() {
    if (isSaved) {
      onDeleteArticle();
    } else {
      handleSaveArticle();
    }

  }

  return (
    <div className='NewsCard' href={card.url}>
      <img className='NewsCard__image' src={card.urlToImage || card.image} alt='News pic' />
      <Switch>
        <Route path='/saved-news'>
          <div className='NewsCard__keyword'>{card.keyword}</div>
          <div className='NewsCard__collectionButtonContainer'>
            <div className='NewsCard__buttonHover'>Убрать из сохранённых</div>
            <button
              className='NewsCard__button NewsCard__button_trash'
              onClick={onDeleteArticle}>
            </button>
          </div>
        </Route>
        <Route path='/'>
          <div className='NewsCard__collectionButtonContainer'>
            {!currentUser.email && <div className='NewsCard__buttonHover'>Войдите, чтобы сохранять статьи</div>}
            <button
              className={`NewsCard__button NewsCard__button_bookmark ${isSaved && 'NewsCard__button_bookmark_saved'}`}
              onClick={onButtonClick}
            >
            </button>
          </div>
        </Route>

      </Switch>
      <div className='NewsCard__body'>
        <p className='NewsCard__time'>{dateFormat(card.publishedAt || card.date, 'dd mmm, yyyy')}</p>
        <h3 className='NewsCard__title'>{card.title}</h3>
        <p className='NewsCard__description'>{card.description || card.text}</p>
        <p className='NewsCard__sourceNname'>{card.source.name || card.source}</p>
      </div>
    </div>
  );
}
