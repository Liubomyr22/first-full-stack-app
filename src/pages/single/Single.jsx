import React from "react";
import SideBar from "../../containers/sideBar/SideBar";
import SinglePost from "../../containers/singlePostComponent/singlePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
