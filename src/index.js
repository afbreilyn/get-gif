import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import routes from './routes';
import configureStore from './store/configureStore';


const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} />
  </Provider>,
  document.getElementById('root')
);