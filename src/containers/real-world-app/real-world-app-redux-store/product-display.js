import React, { Component } from "react";
import { ProductTable } from "../../../components/real-world-app/real-world-app-redux-store/product-table"
import { ProductEditor } from "../../../components/real-world-app/real-world-app-redux-store/product-editor";
import { connect } from "react-redux";
//import { saveProduct, deleteProduct } from "./store"
import { EditorConnector } from "./editor-connector";
import { PRODUCTS } from "../../../redux/constants/real-world-app/data-types";
import { TableConnector } from "./table-connector";
import { startCreatingProduct } from "../../../redux/actions/real-world-app/state-actions";
const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps =  ({combineRelWorldAPPReducers }: state)  => ({
    editing: combineRelWorldAPPReducers.stateData.editing,
    selected: combineRelWorldAPPReducers.modelData.products
        .find(item =>  item.id === combineRelWorldAPPReducers.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createProduct: startCreatingProduct,
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connectFunction(
    class extends Component {

        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         showEditor: false,
        //         selectedProduct: null
        //     }
        // }

        // startEditing = (product) => {
        //     this.setState({ showEditor: true, selectedProduct: product })
        // }

        // createProduct = () => {
        //     this.setState({ showEditor: true, selectedProduct: {} })
        // }

        // cancelEditing = () => {
        //     this.setState({ showEditor: false, selectedProduct: null })
        // }

        // saveProduct = (product) => {
        //     this.props.saveCallback(product);
        //     this.setState({ showEditor: false, selectedProduct: null })
        // }

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={ this.props.selected.id || -1 } />
                // return <ProductEditor
                //     key={ this.state.selectedProduct.id || -1 }
                //     product={ this.state.selectedProduct }
                //     saveCallback={ this.saveProduct }
                //     cancelCallback={ this.cancelEditing } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    {/* <ProductTable products={ this.props.products }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback } />  */}
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={ this.props.createProduct }>
                            Create Product
                        </button>
                    </div>
                </div>
            }
        }
    })