import React from "react";
import NavbarHome from "../Navbar/NavbarHome";
import Dashboard from "./Dashboard";
import "../Styles_CSS_Code/HomePageCSS.css"
import MyTask from "./MyTask";
import Members from "./Members";
import ProfileSection from "./ProfileSection";
import ASideBar from "./ASideBar";

function Homepage () {

  const { Active, setActive } = ASideBar();

  return (
    <div>
      <NavbarHome/>

      <div className="DivideHomePage">
        <ASideBar/>

        <div>
          {/* <Dashboard/>
          <MyTask/>
          <Members/> */}
          <ProfileSection/>


          {/* {active === "dashboard" && <Dashboard/>}
          {active === "MyTasks" && <MyTask/>}
          {active === "Members" && <Members/>}
          {active === "Profile" && <ProfileSection/>} */}
        </div>
      </div>


    </div>
  )
}

export default Homepage;