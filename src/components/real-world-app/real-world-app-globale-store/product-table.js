import React, { Component } from "react";
import { ProductTableRow } from "./product-table-row";

export class ProductTable extends Component {

    render() {
        const  { products,editCallback, deleteCallback } = this.props
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="5"
                                className="bg-primary text-white text-center h4 p-2">
                            Products Table
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th><th>Name</th><th>Category</th>
                        <th className="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                           products.map(p =>
                            <ProductTableRow
                                product={ p }
                                key={ p.id }
                                editCallback={editCallback }
                                deleteCallback={ deleteCallback } />)
                    }
                </tbody>
            </table>
    }
}