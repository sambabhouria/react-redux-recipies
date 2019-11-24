import { combineReducers } from "redux";
import counter from "./couter";
import combineTodosReducers from "./todos";
import products from "./products/products";
export default combineReducers({
  counter,
  combineTodosReducers,
  products,
});
