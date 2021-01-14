import {Route, Switch, Link, useHistory} from 'react-router-dom';

export default function Navigation({ light }) {
  return (
    <div className='Navigation'>
      <Switch>

        <Route path='/saved-news'>
          <Link
            to="./"
            className='Navigation__link Navigation__link_light'>
            Главная
          </Link>
          <Link
            to="./saved-news"
            className='Navigation__link Navigation__link_light Navigation__link_activ'>
            Сохранённые статьи
          </Link>
          <button
            className='Navigation__button Navigation__button_light'>
            Авторизоваться
          </button>
        </Route>

        <Route path='/'>
          <Link
            to="./"
            className='Navigation__link Navigation__link_activ'>
            Главная
          </Link>
          <Link
            to="./saved-news"
            className='Navigation__link'>
            Сохранённые статьи
          </Link>
          <button
            className='Navigation__button'>
            Авторизоваться
          </button>
        </Route>
      </Switch>
    </div>
  );
}
