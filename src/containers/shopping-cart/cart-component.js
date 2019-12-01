import React from "react";
import { connect } from "react-redux";

import CartContainer from "./cart-container";
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
  return (
    <div style={style}>
      <h6 style={style.styleh}> Cart </h6> <hr />
      <CartContainer />
    </div>
  );
};
export default connect()(ProductComponent);
