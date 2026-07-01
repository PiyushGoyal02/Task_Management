import React, { useState } from "react";
import "../Styles_CSS_Code/MembersCSS.css";
import { UserRoundSearch, Ellipsis } from "lucide-react";

function Members() {

  const [searchData, setSearchData] = useState("");

  const userDetails = [
    {
      Nick: "AK",
      Name: "Arjun Kumar",
      Email: "arjun@kumarflow.com",
      AccType: "User",
    },
    {
      Nick: "PG",
      Name: "Pranav Mittal",
      Email: "pranav@mittalflow.com",
      AccType: "User",
    },
    {
      Nick: "RK",
      Name: "Rahul Khanna",
      Email: "rahul@khanaflow.com",
      AccType: "User",
    },
    {
      Nick: "PS",
      Name: "Priya Sharma",
      Email: "priya@kumarflow.com",
      AccType: "User",
    },
  ];

  // Search filter
  const filteredUsers = userDetails.filter((user) => {
    const search = searchData.toLowerCase();

    return (
      user.Name.toLowerCase().includes(search) ||
      user.Email.toLowerCase().includes(search) ||
      user.Nick.toLowerCase().includes(search) ||
      user.AccType.toLowerCase().includes(search)
    );
  });

  return (
    <div className="MembersContainer">
      {/* Header */}
      <div className="headingSection">
        <p className="LengthMembers-text">
          {filteredUsers.length} member
          {filteredUsers.length !== 1 ? "s" : ""} in workspace.
        </p>

        {/* Search Bar */}
        <div className="Searchbar-InputBar">
          <UserRoundSearch size={18} />

          <input
            type="text"
            placeholder="Search member..."
            className="Search-text-bar"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
      </div>


      <div className="MembersList">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.Email} className="UserDetailSection">
              
              <div className="NickCircle">
                <p>{user.Nick}</p>
              </div>

              <div className="UserInfo">
                <p className="UserName">{user.Name}</p>
                <p className="UserEmail">{user.Email}</p>
              </div>

              <div className="UserAction">
                <p className="UserType">{user.AccType}</p>

                <p className="MoreBtn">
                  <Ellipsis />
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="NoUserFound">No member found.</p>
        )}
      </div>
    </div>
  );
}

export default Members;