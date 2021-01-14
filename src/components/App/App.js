import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/saved-news'>
          <Header
            light
          />
          <SavedNews/>
          <Footer/>
        </Route>
        <Route path='/'>
          <Header/>
          <Main/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
