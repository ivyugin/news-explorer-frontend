import {Link} from 'react-router-dom';

import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/facebook.svg';

export default function Footer() {
  return (
    <footer className='Footer'>
      <p className='Footer__copyright'>
        © 2020 Supersite, Powered by News API
      </p>
        <Link
          to='./'
          className='Footer__link Footer__link_main'>
            Главная
        </Link>
        <a
          className='Footer__link Footer__link_praktikum'
          href='https://praktikum.yandex.ru'>
            Яндекс.Практикум
        </a>
        <a
          className='Footer__link Footer__link_github'
          href='https://github.com/ivyugin'>
          <img src={githubLogo} alt='github' className='Footer__logo' />
        </a>
        <a
          className='Footer__link Footer__link_facebook'
          href='https://www.facebook.com/ilya.vyugin'>
          <img src={facebookLogo} alt='facebook' className='Footer__logo' />
        </a>
    </footer>
  );
}
