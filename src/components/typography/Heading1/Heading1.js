import React from "react";
import "./Heading1.css";

const Heading1 = ({ children, ...props }) => {
  return (
    <h1 className="Heading1" {...props}>
      {children}
    </h1>
  );
};

export default Heading1;
