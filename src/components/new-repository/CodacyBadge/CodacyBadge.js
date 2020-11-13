import { React } from "react";
import "./CodacyBadge.css";
import codacyIconSrc from "../../../assets/images/codacy-logo.png";

const CodacyBadge = () => {
  return (
    <div className="codacy-badge">
      <img className="codacy-logo" src={codacyIconSrc} alt="Codacy logo" />
    </div>
  );
};

export default CodacyBadge;
