import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';

import rootSaga from './sagas';
import reducers from './modules';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  persistState(['weather'], { key: 'WEATHER' })
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
