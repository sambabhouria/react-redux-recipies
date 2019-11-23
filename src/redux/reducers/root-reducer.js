import { combineReducers } from "redux";
import combineTodosReducers from "./todos";
import products from "./products/products";
export default combineReducers({
  combineTodosReducers,
  products,
});
