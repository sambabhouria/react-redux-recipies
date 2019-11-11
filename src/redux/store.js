import { middleware } from "./middleware";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";

export const store = createStore(rootReducer, applyMiddleware(...middleware));
