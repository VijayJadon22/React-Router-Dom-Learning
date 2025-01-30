import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navBar">
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? { color: "Blue" } : null)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
          >
            About
          </NavLink>
          <NavLink
            to={"/items"}
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
          >
            Items
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
