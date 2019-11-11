import React from "react";
import chevronDown from "./../../assets/img/icon/chevron-down.svg";
import chevronRight from "./../../assets/img/icon/chevron-right.svg";

const More = props => (
  <div
    style={{
      position: "absolute",
      top: 12,
      right: 4,
      width: 24,
      height: 24,
    }}
  >
    <img src={props.collapsed ? chevronDown : chevronRight} alt="" />
  </div>
);

export default More;
