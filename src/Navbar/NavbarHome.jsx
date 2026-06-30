import React from "react";
import BrandLogo from "../assets/brandLogo.png";
import { CircleUserRound } from "lucide-react";
import "../Styles_CSS_Code/NavbarHomeCSS.css";

function NavbarHome() {
  return (
    <nav className="navbar-home">

      {/* Logo */}
      {/* <img
        src={BrandLogo}
        alt="Tacto logo"
        className="navbar-logo"
      /> */}

      {/* Nav links */}
      <div className="navbar-links">
        <a href="/homepage">Home</a>
        <a href="/projects">Projects</a>
        <a href="/members">Members</a>
        <a href="/about">About</a>
        <a href="/tasksList">Tasks List</a>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        <span className="navbar-free-badge">Free to use</span>
        <CircleUserRound
          size={28}
          className="navbar-user-icon"
        />
      </div>

    </nav>
  );
}

export default NavbarHome;