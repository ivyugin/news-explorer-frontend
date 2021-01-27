import React from 'react';
import NewsCardListBody from '../NewsCardListBody/NewsCardListBody';

export default function NewsCardList({ foundArticles, searchStatus, loggedIn, handleSaveCard, savedArticles, handleDeleteArticle }) {

  const [showCardsCount, setShowCardsCount] = React.useState(3);
  const [newsCards, setNewsCards] = React.useState(foundArticles.slice(0, showCardsCount));

  React.useEffect(() => {
    setNewsCards(foundArticles.slice(0, showCardsCount));
  }, [foundArticles, showCardsCount])

  function showMore() {
    setShowCardsCount(showCardsCount + 3);
  }

  return (
    <section className='NewsCardList'>
      <h2 className='NewsCardList__title'>
        Результаты поиска
      </h2>
      <NewsCardListBody
        NewsCards={newsCards}
        loggedIn={loggedIn}
        handleSaveCard={handleSaveCard}
        savedArticles={savedArticles}
        handleDeleteArticle={handleDeleteArticle}
      />
      <button
        className={`NewsCardList__buttonMore ${foundArticles.length < showCardsCount && 'NewsCardList__buttonMore_hidden'}`}
        onClick={showMore}
      >
        Показать еще
      </button>
    </section>
  );
}

