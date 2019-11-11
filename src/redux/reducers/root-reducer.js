import { combineReducers } from "redux";
import todos from "./todos";
import products from "./products/products";
export default combineReducers({
  todos,
  products,
});
