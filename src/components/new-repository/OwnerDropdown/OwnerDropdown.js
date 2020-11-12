import { React } from "react";
import { Dropdown } from "../../ui";
import "./OwnerDropdown.css";

const OwnerDropdown = ({ ownerName, ownerImgSrc }) => {
  return (
    <Dropdown label="Owner *">
      {ownerImgSrc && (
        <img
          className="owner-image"
          alt={`@${ownerName}`}
          width="20"
          height="20"
          src={ownerImgSrc}
        />
      )}
      {ownerName}{" "}
    </Dropdown>
  );
};

export default OwnerDropdown;
