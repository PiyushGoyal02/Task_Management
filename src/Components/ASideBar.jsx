import React from "react";
import { House, CircleCheckBig, Flame, BellRing, GamepadDirectional } from 'lucide-react';
import "../Styles_CSS_Code/ASideBar.css"
import BrandLogo from "../assets/brandLogo.png"

function ASideBar () {
  return (
    <div className="ASideBarContainer">
      
      <div className="aSidemaintain">

        {/* Brand Image */}
        <div className="BrandImageDiv">
          <img
            src={BrandLogo}
            className="BrandImageASide"
          />
        </div>

        {/* Menu Text */}
        <p className="MenuText">Menu</p>


        {/* Menu aSide Section */}
        <div>

          <div className="Icon-text-aSide">
            <House/>
            <p> Dashboard</p>
          </div>

          <div className="Icon-text-aSide">
            <CircleCheckBig/>
            <p> My Task </p>
          </div>

          <div className="Icon-text-aSide">
            <Flame/>
            <p> Members </p>
          </div>

          <div className="Icon-text-aSide">
            <BellRing/>
            <p> Notification </p>
          </div>

        </div>

        {/* Projects Section */}
        <div className="ProjectSectionaSide">

          <p>Projects</p>

          <div className="ProjectASideSection">
            <GamepadDirectional/>
            <p>Portfolio Website</p>
          </div>

          <div className="ProjectASideSection">
            <GamepadDirectional/>
            <p>E-Commerce</p>
          </div>

          <div className="ProjectASideSection">
            <GamepadDirectional/>
            <p>Mobile App</p>
          </div>
        </div>

        {/* Profile User Detail */}
        <div className="profiledetails">
          <div className="PG-Circle">
            <p >PG</p>
          </div>
          <div>
            <p>Piyush Goyal</p>
            <p>Admin</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ASideBar;