import { combineReducers } from "redux";
import counter from "./couter";
import combineTodosReducers from "./todos";
import combineShoppingCartReducers from "./shopping-cart";
export default combineReducers({
  counter,
  combineTodosReducers,
  combineShoppingCartReducers,
});
