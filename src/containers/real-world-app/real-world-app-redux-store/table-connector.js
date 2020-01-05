import { connect } from "react-redux";
import { startEditingProduct, startEditingSupplier } from "../../../redux/actions/real-world-app/state-actions";
import { deleteProduct, deleteSupplier }   from "../../../redux/actions/real-world-app/model-action-creators";
import { PRODUCTS, SUPPLIERS } from  "../../../redux/constants/real-world-app/data-types";

export const TableConnector = (dataType, presentationComponent) => {
    
    const mapStateToProps =({combineRelWorldAPPReducers }: state) => ({
        products: combineRelWorldAPPReducers.modelData[PRODUCTS],
        suppliers: combineRelWorldAPPReducers.modelData[SUPPLIERS].map(supp => ({
            ...supp,
            products: supp.products.map(id =>
                combineRelWorldAPPReducers.modelData[PRODUCTS].find(p => p.id === Number(id)) || id)
                    .map(val => val.name || val)
        }))
    })

    const mapDispatchToProps = {
        editCallback: dataType === PRODUCTS
            ? startEditingProduct : startEditingSupplier,
        deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier
    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}