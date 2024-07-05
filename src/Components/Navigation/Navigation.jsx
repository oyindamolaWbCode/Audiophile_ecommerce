import React from "react";
import Logo from "../Logo/Logo";
import cart from "../../assets/Icons/logo.svg";
import "./navigation.css";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <>
      <nav className="nav">
        <Logo />
        <div className="nav__nav-links">
          <NavLink className="nav__nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav__nav-link" to="/headphones">
            Headphones
          </NavLink>
          <NavLink className="nav__nav-link" to="/speakers">
            Speakers
          </NavLink>
          <NavLink className="nav__nav-link" to="/earphones">
            Earphones
          </NavLink>
        </div>
        <img src={cart} alt="nav-cart" className="cart" />
      </nav>
    </>
  );
}

export default Navigation;
