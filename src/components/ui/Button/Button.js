import React from "react";
import "./Button.css";

const Button = ({ children, kind = "primary", disabled = false }) => {
  return (
    <button className={`btn btn-${kind}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
