import React from "react";
import "./NavHeader.css";
const NavHeader = (props) => {
  const { centerIt } = props;
  return (
    <div className="center-it">
      <h1>{centerIt}</h1>
    </div>
  );
};

export default NavHeader;
