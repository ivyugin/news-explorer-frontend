import {
  Route, Switch, Link, useHistory,
} from 'react-router-dom';

export default function Navigation({ light }) {
  return (
    <div className='Navigation'>
      <button
        className={`Navigation__link${light ? ' Navigation__link_light' : ''}`}>
        Главная
      </button>
      <button
        className={`Navigation__button${light ? ' Navigation__button_light' : ''}`}>
        Авторизоваться
      </button>
    </div>
  );
}
