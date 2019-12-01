import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({ title, children }) => (
  <div>
    <div>
      <h3>
        {" "}
        {title} {children}{" "}
      </h3>{" "}
    </div>{" "}
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default ProductsList;
