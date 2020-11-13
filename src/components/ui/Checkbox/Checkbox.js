import { React } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, description, icon }) => {
  const hasIcon = icon != null;

  return (
    <div
      className={`checkbox-wrapper${
        hasIcon ? " checkbox-wrapper-with-icon" : ""
      }`}
    >
      <label className="checkbox-label">
        <input
          type="checkbox"
          className={`checkbox${hasIcon ? " checkbox-with-icon" : ""}`}
        />
        {label}
      </label>

      {hasIcon && <span className="checkbox-icon">{icon}</span>}

      {description != null && (
        <div className="checkbox-description">{description}</div>
      )}
    </div>
  );
};

export default Checkbox;
