import { combineReducers } from "redux";
import counter from "./counter";
import combineAsyncReducers from "./async";
import combineTodosReducers from "./todos";
import combineRelWorldAPPReducers from "./real-world-app";

import combineShoppingCartReducers from "./shopping-cart";
export default combineReducers({
  counter,
  combineTodosReducers,
  combineShoppingCartReducers,
  combineAsyncReducers,
  combineRelWorldAPPReducers
});
