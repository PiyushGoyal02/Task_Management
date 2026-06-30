import React from "react";
import "../Styles_CSS_Code/DashboardCSS.css";
import { BookmarkCheck, Clock, CircleCheckBig,Signature } from "lucide-react";

function Dashboard() {
  return (
    <div className="CardsSectionDiv">

      <div className="DashBoardCards">
        <div className="iconText">
          <BookmarkCheck size={22} />
          <p>Total Tasks</p>
        </div>

        <h2>24</h2>
        <span>All Projects</span>
      </div>

      <div className="DashBoardCards">
        <div className="iconText">
          <Clock size={22} />
          <p>In Progress</p>
        </div>

        <h2>8</h2>
        <span>Active Now</span>
      </div>

      <div className="DashBoardCards">
        <div className="iconText">
          <CircleCheckBig size={22} />
          <p>Completed</p>
        </div>

        <h2>13</h2>
        <span>Finished Tasks</span>
      </div>

      <div className="DashBoardCards">
        <div className="iconText">
          <Signature size={22} />
          <p>Members</p>
        </div>

        <h2>8</h2>
        <span>In Workspace</span>
      </div>

    </div>
  );
}

export default Dashboard;