import { React } from "react";
import "./RadioButton.css";

const RadioButton = ({ label, description }) => {
  return (
    <div className="radio-button-wrapper">
      <label className="radio-button-label">
        <input type="radio" className="radio-button" />
        {label}
      </label>
      {description != null && (
        <div className="radio-button-description">{description}</div>
      )}
    </div>
  );
};

export default RadioButton;
