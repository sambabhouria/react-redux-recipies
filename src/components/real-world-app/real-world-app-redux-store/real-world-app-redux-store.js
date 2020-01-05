import React, { Component } from "react";
import { Selector } from './selector';
import { ProductDisplay } from '../../../containers/real-world-app/real-world-app-redux-store/product-display';
import { SupplierDisplay } from '../../../containers/real-world-app/real-world-app-redux-store/supplier-display';
export default class RealWorldAppReduxStore extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: [
    //             { id: 1, name: "Kayak",
    //             category: "Watersports", price: 275 },
    //             { id: 2, name: "Lifejacket",
    //                 category: "Watersports", price: 48.95 },
    //             { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.50 }
    //         ],
    //         suppliers: [
    //             { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
    //             { id: 2, name: "Field Supplies", city: "New York", products: [3] },
    //         ]
    //     }
    //     this.idCounter = 100;
    // }

    // saveData = (collection, item) => {
    //     if (item.id === "") {
    //         item.id = this.idCounter++;
    //         this.setState(state => state[collection]
    //             = state[collection].concat(item));
    //     } else {
    //         this.setState(state => state[collection]
    //             = state[collection].map(stored =>
    //                   stored.id === item.id ? item: stored))
    //     }
    // }

    // deleteData = (collection, item) => {
    //     this.setState(state => state[collection]
    //         = state[collection].filter(stored => stored.id !== item.id));
    // }

    render() {
        return (
           
                <Selector>
                    <ProductDisplay name="Products" />
                    <SupplierDisplay name="Suppliers" />
                </Selector>      
          
        )
    }
}