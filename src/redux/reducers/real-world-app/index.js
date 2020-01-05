import { combineReducers } from "redux";
import modelReducer from "./model-reducer";
import stateReducer from "./state-reducer";

export default combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  });


export { saveProduct, saveSupplier, deleteProduct, deleteSupplier }
    from "../../actions/real-world-app/model-action-creators";