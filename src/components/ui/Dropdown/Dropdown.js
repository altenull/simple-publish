import { React } from "react";
import "./Dropdown.css";
import { Button } from "../../ui";

const Dropdown = ({ children }) => {
  return <Button className="dropdown">{children}</Button>;
};

export default Dropdown;
