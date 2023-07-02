import React from "react";
import Nav from "../Nav/Nav";
import './header.css'

const Header = () => {
  return (
    <div>
      <Nav />
      <img
      className="header__img"
        src="https://www.datocms-assets.com/30484/1612013383-white-fox-studios537.jpg?auto=format&dpr=0.19&q=70&w=5000"
        alt=""
      />
    </div>
  );
};

export default Header;
