import { combineReducers } from "redux";
import modelReducer from "./model-reducer";


export default combineReducers({
    modelData: modelReducer,
  });


export { saveProduct, saveSupplier, deleteProduct, deleteSupplier }
    from "../../actions/real-world-app/model-action-creators";