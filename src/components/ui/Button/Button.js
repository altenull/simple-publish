import React from "react";
import "./Button.css";

const Button = ({ children, kind = "", disabled = false, className }) => {
  return (
    <button
      className={`btn${!!kind ? ` btn-${kind}` : ""}${
        !!className ? ` ${className}` : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
