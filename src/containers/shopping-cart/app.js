import React, { useState, useEffect } from "react";
import Tabs from "../../components/onglet/tabs";
import ProductComponent from "./product-component";
import CartComponent from "./cart-component";
import "./shopping-cart-tab.css";

import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";

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

const ShoppingCartApp = () => {
  const [readme, setReadme] = useState(null);

  useEffect(() => {
    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        setReadme(text);
      });
  }, []);

  return (
    <Tabs>
      <div label="Introduction">
        <div style={style}>
          {readme === null ? (
            "Chargement..."
          ) : (
            <ReactMarkdown source={readme} />
          )}
        </div>
      </div>
      <div label="Shopping">
        <ProductComponent />
      </div>
      <div label="Cart">
        <CartComponent />
      </div>
    </Tabs>
  );
};
export default ShoppingCartApp;
