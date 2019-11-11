import classNames from "classnames";
import React from "react";
import styles from "./index.css";

const ButtonToolbar = ({ className, ...props }) => (
  <div {...props} className={classNames(className, styles.btnToolbar)} />
);

export default ButtonToolbar;
