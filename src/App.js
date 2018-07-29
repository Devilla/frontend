import React,{ Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }
  componentDidMount() {
    if (window.Stripe) {
      process.env.NODE_ENV === 'production' ?  this.setState({stripe: window.Stripe(process.env.REACT_APP_STRIPE_KEY)}) : this.setState({stripe: window.Stripe(process.env.REACT_APP_DEVELOPMENT_STRIPE_KEY)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        process.env.NODE_ENV === 'production' ?  this.setState({stripe: window.Stripe(process.env.REACT_APP_STRIPE_KEY)}) : this.setState({stripe: window.Stripe(process.env.REACT_APP_DEVELOPMENT_STRIPE_KEY)});
      });
    }
  }
  render() {
    return (
      <AppContainer errorReporter={Error}>
        <Provider store={store}>
          <StripeProvider stripe={this.state.stripe} >
            <this.props.Component routerHistory={routerHistory} />
          </StripeProvider>
        </Provider>
      </AppContainer>
    );
  }

}

export default App;
