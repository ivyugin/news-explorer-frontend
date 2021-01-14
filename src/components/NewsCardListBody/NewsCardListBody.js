import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardListBody({ NewsCards, Main }) {
  return (
    <div className="NewsCardListBody">
      <ul className="NewsCardListBody__grid">
        {NewsCards.map((card) => {
          return (
            <NewsCard
              key = {card._id}
              card = {card}
              Main = {Main}
            />
          );
        })}
      </ul>
    </div>
  );
}
