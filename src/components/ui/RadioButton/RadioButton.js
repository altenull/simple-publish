import { React } from "react";
import "./RadioButton.css";

const RadioButton = ({
  checked = false,
  label,
  description,
  icon,
  onClick,
}) => {
  const hasIcon = icon != null;

  return (
    <div
      className={`radio-button-wrapper${
        hasIcon ? " radio-button-wrapper-with-icon" : ""
      }`}
      onClick={() => onClick()}
    >
      <label className="radio-button-label">
        <input
          type="radio"
          checked={checked}
          className={`radio-button${hasIcon ? " radio-button-with-icon" : ""}`}
        />
        {label}
      </label>

      {hasIcon && <span className="radio-button-icon">{icon}</span>}

      {description != null && (
        <div className="radio-button-description">{description}</div>
      )}
    </div>
  );
};

export default RadioButton;
