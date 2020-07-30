import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from './reducers';
import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
);
