export default function NewsCard({ card, Main }) {
  return (
    <div className='NewsCard'>
      <img className='NewsCard__image' src={card.urlToImage} alt='News Image' />
      <button
        className={`NewsCard__button
          ${Main ? 'NewsCard__button_bookmark' : 'NewsCard__button_trash'}`}>
      </button>
      <div className='NewsCard__body'>
        <p className='NewsCard__time'>{card.time}</p>
        <h3 className='NewsCard__title'>{card.title}</h3>
        <p className='NewsCard__description'>{card.description}</p>
        <p className='NewsCard__sourceNname'>{card.sourceNname}</p>
      </div>
    </div>
  );
}
