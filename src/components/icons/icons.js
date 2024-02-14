import React from "react";
import ball from "./icons/ball.svg";
import twitter from "./icons/twitter.svg";
import git from "./icons/git.svg";
import "./icons.css";

function Icons() {
  return (
    <div className="all_icon">
      <img className="icon" src={git} alt="" />
      <img className="icon" src={twitter} alt="" />
      <img className="icon" src={ball} alt="" />
    </div>
  );
}
export default Icons;
