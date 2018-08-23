import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { reducer } from '../store';
const store = createStore(reducer);

it("renders without crash", () => {
  const div = document.createElement("root");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div
  );
});