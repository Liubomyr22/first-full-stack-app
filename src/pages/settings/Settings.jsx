import React from "react";
import SideBar from "../../containers/sideBar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu--Wkq0iTJUd97H3uCxuBhBedqkUZd3DNQ&usqp=CAU"
              alt="pic"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User name</label>
          <input type="text" placeholder="Luco" />
          <label>Email</label>
          <input type="email" placeholder="Luco@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
