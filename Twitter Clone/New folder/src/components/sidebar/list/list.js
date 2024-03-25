import React from "react";
import Item from "./item";
import Home from "./home";
import Lists from "./lists";
import Messages from "./messages";
import More from "./more";
import Notifications from "./notifications";
import Profile from "./profile";
import Search from "./search";
import X from "./x";

function list() {
  return (
    <div className="list">
      <Item svg={Home} text="Home"></Item>
      <Item svg={Search} text="Explore"></Item>
      <Item svg={Notifications} text="Notifications"></Item>
      <Item svg={Messages} text="Messages"></Item>
      <Item svg={Lists} text="Lists"></Item>
      <Item svg={X} text="Premium"></Item>
      <Item svg={Profile} text="Profile"></Item>
      <Item svg={More} text="More"></Item>
    </div>
  );
}

export default list;
