import React from "react";
import "./Button.css";

const Button = ({ children, kind = "", disabled = false }) => {
  return (
    <button
      className={`btn ${!!kind ? `btn-${kind}` : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
