import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Main from './pages/main';

import './styles.css';

const App = () => (
  <Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
