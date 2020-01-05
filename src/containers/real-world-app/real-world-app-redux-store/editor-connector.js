import { connect } from "react-redux";
import { endEditing } from "../../../redux/actions/real-world-app/state-actions";
import { saveProduct, saveSupplier } from "../../../redux/actions/real-world-app/model-action-creators";
import { PRODUCTS, SUPPLIERS  } from "../../../redux/constants/real-world-app/data-types";

export const EditorConnector = (dataType, presentationComponent) => {

    const mapStateToProps = ({combineRelWorldAPPReducers }: state) => ({
        editing: combineRelWorldAPPReducers.stateData.editing
            && combineRelWorldAPPReducers.stateData.selectedType === dataType,
        product: (combineRelWorldAPPReducers.modelData[PRODUCTS]
            .find(p => p.id === combineRelWorldAPPReducers.stateData.selectedId)) || {},
        supplier:(combineRelWorldAPPReducers.modelData[SUPPLIERS]
            .find(s => s.id === combineRelWorldAPPReducers.stateData.selectedId)) || {}
    })

    const mapDispatchToProps = dispatch => ({
        cancelCallback: () => dispatch(endEditing()),
        saveCallback: (data) => {
            dispatch((dataType === PRODUCTS ? saveProduct: saveSupplier)(data));
            dispatch(endEditing());
        }
    });

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}