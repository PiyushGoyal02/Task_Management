import React from "react";
import NavbarHome from "../Navbar/NavbarHome";
import ASideBar from "./ASideBar";
import Dashboard from "./Dashboard";
import "../Styles_CSS_Code/HomePageCSS.css"
import MyTask from "./MyTask";

function Homepage () {
  return (
    <div>
      <NavbarHome/>

      <div className="DivideHomePage">
        <ASideBar/>

        <div>
          {/* <Dashboard/> */}
          <MyTask/>
        </div>
      </div>


    </div>
  )
}

export default Homepage;