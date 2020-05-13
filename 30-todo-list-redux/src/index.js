import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import { createStore } from 'redux'
//import {global} from './tasks'
import tasks from './reducers'

const store = createStore(tasks)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


