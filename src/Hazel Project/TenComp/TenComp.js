import React from "react";
import "./ten.css";

export default class Ten extends React.Component {
  render() {
    return (
      <div className="ten-container">
        <h4> HAZEL </h4>
        <div className="icon-container">
          <a href="#">
            <i class="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i class="fab fa-twitter" />
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in" />
          </a>
          <a href="#">
            <i class="fab fa-google-plus-g" />
          </a>
          <a href="#">
            <i class="fab fa-vimeo-v" />
          </a>
          <a href="#">
            <i class="fab fa-dribbble" />
          </a>
        </div>
      </div>
    );
  }
}
