import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardListBody({ NewsCards, handleDeleteArticle, handleSaveCard, savedArticles }) {
  return (
    <div className="NewsCardListBody">
      <div className="NewsCardListBody__grid">
        {NewsCards.map((card) => {
          return (
            <NewsCard
              key={card.link || card.url}
              card = {card}
              handleDeleteArticle={handleDeleteArticle}
              handleSaveCard={handleSaveCard}
              savedArticles={savedArticles}
            />
          );
        })}
      </div>
    </div>
  );
}
