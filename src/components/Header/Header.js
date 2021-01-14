import {Route, Switch, Link, useHistory} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <Switch>
      <Route path='/saved-news'>
        <header className='Header Header_light'>
          <div className='Header__logo Header__logo_light'>
            NewsEexplorer
          </div>
          <Navigation />
        </header>
      </Route>

      <Route path='/'>
        <header className='Header'>
          <div className='Header__logo'>
            NewsEexplorer
          </div>
          <Navigation />
        </header>
      </Route>
    </Switch>
  );
}
