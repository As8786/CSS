import React from "react";
import "./first.css";

export default class First extends React.Component {
  render() {
    return (
      <div className="first-container">
        <div className="gradient" />
        <div className="first-content">
          <h3> WELCOME TO HAZEL </h3>
          <div className="input-div">
            <input type="button" value="ABOUT US" />
            <span> OR </span>
            <input type="button" value="CONTACT" />
          </div>
        </div>
      </div>
    );
  }
}
