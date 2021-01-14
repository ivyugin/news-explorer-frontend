import {Route, Switch, Link, useHistory} from 'react-router-dom';

export default function NewsCard({ card }) {
  return (
    <div className='NewsCard'>
      <img className='NewsCard__image' src={card.urlToImage} alt='News Image' />
      <Switch>

        <Route path='/saved-news'>
          <button className='NewsCard__button NewsCard__button_trash'>
          </button>
        </Route>
        <Route path='/'>
          <button className='NewsCard__button NewsCard__button_bookmark'>
          </button>
        </Route>

      </Switch>
      <div className='NewsCard__body'>
        <p className='NewsCard__time'>{card.time}</p>
        <h3 className='NewsCard__title'>{card.title}</h3>
        <p className='NewsCard__description'>{card.description}</p>
        <p className='NewsCard__sourceNname'>{card.sourceNname}</p>
      </div>
    </div>
  );
}
