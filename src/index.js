import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBarExampleIcon from './containers/home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


const store = applyMiddleware()(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
  </Provider>,

  document.getElementById('root')
);

