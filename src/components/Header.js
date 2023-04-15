import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div
        className="d-flex justify-content-between
        align-items-center"
      >
        <div className="logo">
          <Link to="/" className="brand">
            Store
          </Link>
        </div>
        <div className="nav nav-pills p-2 gap-2 ">
          <NavLink to="/" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="about" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="products" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>
            Products
          </NavLink>
          <NavLink to="posts" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>
            Posts
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
