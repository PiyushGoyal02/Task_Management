import React from "react";
import ProfileImage from "../assets/ProfileImage.png";
import "../Styles_CSS_Code/ProfileSectionCSS.css";

function ProfileSection() {
  return (
    <div className="profileContainer">
      {/* Left Side */}
      <div className="profileCard">
        <h2 className="profileTitle">Personal Information</h2>

        <form className="profileForm">

          {/* First & Last Name */}
          <div className="row">
            <div className="inputGroup">
              <label htmlFor="firstName" className="inputLabel">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="textInput"
                placeholder="Enter first name"
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="lastName" className="inputLabel">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="textInput"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="inputGroup">
            <label htmlFor="email" className="inputLabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="textInput"
              placeholder="Enter email"
            />
          </div>

          {/* Phone */}
          <div className="inputGroup">
            <label htmlFor="phone" className="inputLabel">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="textInput"
              placeholder="Enter phone number"
            />
          </div>

          {/* Bio */}
          <div className="inputGroup">
            <label htmlFor="bio" className="inputLabel">
              Bio
            </label>
            <textarea
              id="bio"
              className="textArea"
              placeholder="Write something about yourself..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="buttonContainer">
            <button type="submit" className="saveButton">
              Save Changes
            </button>
          </div>

        </form>
      </div>

      {/* Right Side */}
      <div>
        {/* Profile Photo */}
        <div className="profilePhotoContainer">
          <div className="profilePhoto">
            <img src={ProfileImage} alt="Profile Photo" />
          </div>
          <p className="AdminTaskFlowText">Admin: TaskFlow workspace</p>

          <div className="profileStats">
            <div className="profileBoxes">
              <p>24</p>
              <p>Tasks</p>
            </div>

            <div className="profileBoxes">
              <p>13</p>
              <p>Projects</p>
            </div>

            <div className="profileBoxes">
              <p>11</p>
              <p>Done</p>
            </div>
          </div>

          <button className="saveButton UploadButton">Upload Profile</button>
        </div>

        {/* Change Password */}
        <div className="changePasswordContainer">
          <p className="profileTitle">Change Password</p>
          <div>
            <p className="inputLabel">Current Password</p>
            <input className="textInput" type="password" placeholder="Enter current password" />
          </div>

          <div>
            <p className="inputLabel">New Password</p>
            <input className="textInput" type="password" placeholder="Enter new password" />
          </div>
          <button type="submit" className="saveButton ChangePasswordButton">
            Change Password
          </button>
        </div>
      </div>


    </div>
  );
}

export default ProfileSection;