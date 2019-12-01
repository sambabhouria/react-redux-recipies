import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from "../../redux/actions/products";
import { getVisibleProducts } from '../../redux/reducers/shopping-cart/products/products'
import ProductItem from '../../components/shopping-cart/product-item'
import ProductsList from '../../components/shopping-cart/product-list'


const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title=''>
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}
/**
https://medium.com/@crunchtech/object-destructuring-best-practice-in-javascript-9c8794699a0d
//Nested destructuring
const obj = {
  main: {
    content: {
      title: 'old pier',
      description: 'a structure even the seagulls fly away.'
    }
  }
}
const { main: { content: { title } } } = obj || {}
 */
const mapStateToProps = ({combineShoppingCartReducers }: state) => ({
  products: getVisibleProducts(combineShoppingCartReducers.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
