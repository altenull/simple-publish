import { React } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, description }) => {
  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-label">
        <input type="checkbox" className="checkbox" />
        {label}
      </label>
      {description != null && (
        <div className="checkbox-description">{description}</div>
      )}
    </div>
  );
};

export default Checkbox;
