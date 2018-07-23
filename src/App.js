import React from 'react';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import reducer from './ducks';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { StripeProvider } from 'react-stripe-elements';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk)
));

const routerHistory = syncHistoryWithStore(browserHistory, store, {selectLocationState: state => state.get('router')});


sagaMiddleware.run(rootSaga);

const App = ({Component}) =>
  <AppContainer errorReporter={Error}>
    <Provider store={store}>
      <StripeProvider apiKey={process.env.NODE_ENV === 'production' ? process.env.REACT_APP_STRIPE_KEY : process.env.REACT_APP_DEVELOPMENT_STRIPE_KEY}>
        <Component routerHistory={routerHistory} />
      </StripeProvider>
    </Provider>
  </AppContainer>;

export default App;
