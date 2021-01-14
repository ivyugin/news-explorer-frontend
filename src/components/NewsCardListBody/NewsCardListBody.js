import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardListBody({ NewsCards }) {
  return (
    <div className="NewsCardListBody">
      <ul className="NewsCardListBody__grid">
        {NewsCards.map((card) => {
          return (
            <NewsCard
              key = {card._id}
              card = {card}
            />
          );
        })}
      </ul>
    </div>
  );
}
