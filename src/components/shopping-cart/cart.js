import React from "react";
import PropTypes from "prop-types";
import Product from "./product";
import "./cart.css";
const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <div className="product-type">
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
        <button onClick={console.log("remove")}>Remove</button>
      </div>
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <div className="flex-container">{nodes}</div>

      <p className="total">Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
