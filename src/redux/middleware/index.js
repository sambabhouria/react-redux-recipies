
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
