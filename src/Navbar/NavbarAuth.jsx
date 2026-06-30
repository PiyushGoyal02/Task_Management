import React from "react";
import BrandLogo from "../assets/brandLogo.png";
import { CircleUserRound } from "lucide-react";
import "../Styles_CSS_Code/NavbarAuth.css";

function NavbarAuth() {
  return (
    <nav className="navbar-home">

      {/* Logo */}
      <img
        src={BrandLogo}
        alt="Tacto logo"
        className="navbar-logo"
      />

      {/* Right side */}
      <div className="navbar-right">
        <button className="CreateAcc-Button">Create Account</button>
      </div>

    </nav>
  );
}

export default NavbarAuth;