import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h1 className="title">{props.title}</h1>
      </div>
    </header>
  );
};

export default Header;
