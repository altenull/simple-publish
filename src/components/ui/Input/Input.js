import { React, useState } from "react";
import "./Input.css";

const Input = ({ id, label, value = "", ...props }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input"
        type="text"
        value={inputValue}
        onChange={(event) => handleChange(event)}
        {...props}
      />
    </div>
  );
};

export default Input;
