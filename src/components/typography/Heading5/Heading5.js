import React from "react";
import "./Heading5.css";

const Heading5 = ({ children, ...props }) => {
  return (
    <h5 className="Heading5" {...props}>
      {children}
    </h5>
  );
};

export default Heading5;
