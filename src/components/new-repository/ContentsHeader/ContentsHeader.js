import { React } from "react";
import "./ContentsHeader.css";

const ContentsHeader = () => {
  return (
    <div className="contents-header">
      <h1>Create a new repository</h1>
      <div className="sub-heading">
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?{" "}
        <a href="/">Import a repository.</a>
      </div>
    </div>
  );
};

export default ContentsHeader;
