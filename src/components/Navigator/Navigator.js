import React from "react";
import "./navigator.css";
import img from "../../assests/black.png";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="navigator__container">
      <div className="navigator__details">
        <img className="nav__img" src={img} alt="" />
        <h2 className="navigator__header">we're getting married</h2>
        <Link to="/home">
          <button className="navigator__btn">enter ⮞</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigator;
