import { React } from "react";
import "./Dropdown.css";
import { Button } from "../../ui";

const Dropdown = ({ children, label }) => {
  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">{label}</label>
      <Button className="dropdown">{children}</Button>
    </div>
  );
};

export default Dropdown;
