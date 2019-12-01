import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actions/products";
import ProductsContainer from "./products-container";
const style = {
  marginTop: "8px",
  background: "#f9dcdd",
  styleh: {
    lineHeight: "20px",
    verticalAlign: "middle",
    textAlign: "center",
    marginBottom: "-12px",
  },
};

const ProductComponent = ({ dispatch }) => {
  /// const [state, setstate] = useState( );
  useEffect(() => {
    dispatch(getAllProducts());
  });
  return (
    <div style={style}>
      <h6 style={style.styleh}> Products </h6> <hr />
      <ProductsContainer />
    </div>
  );
};
export default connect()(ProductComponent);
