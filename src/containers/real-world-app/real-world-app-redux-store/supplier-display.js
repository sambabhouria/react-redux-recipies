import React, { Component } from "react";
import { SupplierEditor } from "../../../components/real-world-app/real-world-app-redux-store/supplier-editor";
import { SupplierTable } from "../../../components/real-world-app/real-world-app-redux-store/supplier-table";
import { connect } from "react-redux";
import { startCreatingSupplier }   from "../../../redux/actions/real-world-app/state-actions";

import { SUPPLIERS } from "../../../redux/constants/real-world-app/data-types";
import { EditorConnector } from "./editor-connector";
import { TableConnector } from   "./table-connector";


const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);


const mapStateToProps =  ({combineRelWorldAPPReducers }: state) => ({
    editing: combineRelWorldAPPReducers.stateData.editing,
    selected: combineRelWorldAPPReducers.modelData.suppliers
        .find(item => item.id === combineRelWorldAPPReducers.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createSupplier: startCreatingSupplier
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connectFunction(
    class extends Component {

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={ this.props.selected.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={ this.props.createSupplier }>
                                Create Supplier
                        </button>
                    </div>
                </div>
            }
        }
    })