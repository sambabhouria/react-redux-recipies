import React from "react";
import PropTypes from "prop-types";
import Product from "./product";
import "./product.css";

const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <div
      style={{
        marginBottom: "1px",
      }}
    >
      <table className="products">
        <tbody>
          <tr>
            <td>
              <Product
                title={product.title}
                price={product.price}
                quantity={product.inventory}
              />
            </td>
            <td className="add-cart-button">
              <button
                onClick={onAddToCartClicked}
                disabled={product.inventory > 0 ? "" : "disabled"}
              >
                {product.inventory > 0 ? (
                  <i className="fas fa-shopping-cart"> </i>
                ) : (
                  "Sold Out"
                )}{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
