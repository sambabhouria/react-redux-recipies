import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../../redux/actions/products";

import { getTotal, getCartProducts } from "../../redux/reducers/shopping-cart";
import Cart from "../../components/shopping-cart/cart";

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ combineShoppingCartReducers }: state) => ({
  products: getCartProducts(combineShoppingCartReducers),
  total: getTotal(combineShoppingCartReducers),
});

export default connect(mapStateToProps, { checkout })(CartContainer);
