import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

/** this code for testing that action dispathc, logger */
import { getAllProducts } from "./redux/actions/products";

store.dispatch(getAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container"),
);
