import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import { App } from 'components/App';
import { reducer } from "redux/reducer";

import "semantic-ui-css/semantic.min.css";
import "normalize.css";
import "./index.css";


export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
